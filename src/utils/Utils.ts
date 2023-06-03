export function getOrigin(): string {
	const API_TEST_ORIGIN = "http://localhost:5000";
	const API_TEST_ORIGIN_NETWORK = "http://192.168.1.18:5000";
	const API_PROD_ORIGIN = "https://zany-ray-bonnet.cyclic.app"; //https://najwer23api-eu.lm.r.appspot.com";

	let API_ORIGIN = API_PROD_ORIGIN;

	if (window.location.hostname === "localhost") {
		API_ORIGIN = API_TEST_ORIGIN;
	}

	if (window.location.hostname === "192.168.1.18") {
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

	if (method != "GET") {
		fetchObj = { ...fetchObj, body: JSON.stringify(body) };
	}

	const res = await fetch(getOrigin() + url, fetchObj);
	const data = await res.json();
	return data;
}

