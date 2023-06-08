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

export function isEmpty(v: any): boolean {
	if (v === undefined) return true;

	if (
		typeof v == "function" ||
		typeof v == "number" ||
		typeof v == "boolean" ||
		Object.prototype.toString.call(v) === "[object Date]"
	)
		return false;

	if (v == null || v.length === 0) return true;

	if (typeof v == "object") {
		return Object.keys(v).length < 1;
	}

	return false;
}

export function dateFormatterFromDt(dt: any): string|null {
	return isEmpty(dt) ? null : new Date(dt * 1000).toLocaleString();
}

export function setLocalStorageCookie(key: any, value: any, exhours: any) {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + exhours * 60 * 60 * 1000,
	};
	localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorageCookie(key: any) {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) return null;
	const item = JSON.parse(itemStr);
	const now = new Date();

	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
}

