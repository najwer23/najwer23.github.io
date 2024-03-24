import { useLayoutEffect, useReducer, useRef } from 'react'
import { getLocalStorageCookie } from '../functions/getLocalStorageCookie'
import { setLocalStorageCookie } from '../functions/setLocalStorageCookie'

interface State<T> {
	data?: T
	error?: Error
	status: "idle" | "loading" | "done" | "error"
	executeFetch?: (body?: any) => void
}

type Action<T> =
	| { type: 'loading' }
	| { type: 'done'; payload: T }
	| { type: 'error'; payload: Error }

export function useFetch<T = unknown>(
	url?: string,
	options?: any,
	executeOnMount = true
): State<T> {
	const cancelRequest = useRef<boolean>(false)

	const fetchData = async (body?: any) => {
		dispatch({ type: 'loading' })

		if (!url) return;

		cancelRequest.current = false;

		const localStorageCookieURL = getLocalStorageCookie(url)

		if (options.method === "GET") {
			if (localStorageCookieURL) {
				dispatch({ type: 'done', payload: localStorageCookieURL })
				return;
			}
		}

		try {
			if (options.method !== "GET") {
				options = { ...options, body: JSON.stringify(body) };
			}

			const response = await fetch(url, options)

			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const data = (await response.json()) as T;
			options.method === "GET" && setLocalStorageCookie(url, data, 0.5)

			if (cancelRequest.current) return;
			dispatch({ type: 'done', payload: data })

		} catch (error) {
			if (cancelRequest.current) return
			dispatch({ type: 'error', payload: error as Error })
		}
	}

	const initialState: State<T> = {
		error: undefined,
		data: undefined,
		status: "idle",
		executeFetch: fetchData,
	}

	const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
		switch (action.type) {
			case 'loading':
				return { ...initialState, status: "loading" }
			case 'done':
				return { ...initialState, data: action.payload, status: "done" }
			case 'error':
				return { ...initialState, error: action.payload, status: "error" }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(fetchReducer, initialState)

	useLayoutEffect(() => {
		if (executeOnMount) fetchData();
	}, [url]);

	return state;
}