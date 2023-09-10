import { useEffect, useReducer, useRef } from 'react'
import { getLocalStorageCookie, setLocalStorageCookie } from '../utils/Utils'

interface State<T> {
	data?: T
	error?: Error
	status: string
}

type Action<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error }

export function useFetch<T = unknown>(
	url?: string,
	options?: RequestInit,
): State<T> {
	const cancelRequest = useRef<boolean>(false)

	const initialState: State<T> = {
		error: undefined,
		data: undefined,
		status: "idle",
	}

	const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
		switch (action.type) {
			case 'loading':
				return { ...initialState, status: "fetching" }
			case 'fetched':
				return { ...initialState, data: action.payload, status: "done" }
			case 'error':
				return { ...initialState, error: action.payload, status: "error" }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(fetchReducer, initialState)

	useEffect(() => {
		if (!url) return;

		cancelRequest.current = false

		const localStorageCookieURL = getLocalStorageCookie(url)

		const fetchData = async () => {
			dispatch({ type: 'loading' })

			if (localStorageCookieURL) {
				dispatch({ type: 'fetched', payload: localStorageCookieURL })
				return;
			}

			try {
				const response = await fetch(url, options)

				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = (await response.json()) as T;

				setLocalStorageCookie(url, data, 0.5)

				if (cancelRequest.current) return;

				dispatch({ type: 'fetched', payload: data })

			} catch (error) {
				if (cancelRequest.current) return

				dispatch({ type: 'error', payload: error as Error })
			}
		}

		void fetchData()

		return () => {
			cancelRequest.current = true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url])

	return state;
}

