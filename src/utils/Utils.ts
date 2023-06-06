import { useLayoutEffect, useState } from "react";


export function getOrigin(): string {
	const API_PORT = 5000;
	const LOCALHOST_IN_NETWORK = "192.168.5.241"
	const API_TEST_ORIGIN = "http://localhost:" + API_PORT;
	const API_TEST_ORIGIN_NETWORK = "http://"+ LOCALHOST_IN_NETWORK +":" + API_PORT;
	const API_PROD_ORIGIN = "https://zany-ray-bonnet.cyclic.app";

	let API_ORIGIN = API_PROD_ORIGIN;

	if (window.location.hostname === "localhost") {
		API_ORIGIN = API_TEST_ORIGIN;
	}

	if (window.location.hostname === LOCALHOST_IN_NETWORK) {
		API_ORIGIN = API_TEST_ORIGIN_NETWORK;
	}

	return API_ORIGIN;
}


export async function useFetch(url:string, method:any, body:any) {
	let fetchObj:any = {
		method: method,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
	};

	if (method !== "GET") {
		fetchObj = { ...fetchObj, body: JSON.stringify(body) };
	}

	const res = await fetch(getOrigin() + url, fetchObj);
	const data = await res.json();
	return data;
}

export function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}


