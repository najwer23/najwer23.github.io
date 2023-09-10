import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"

export const Weather = (): JSX.Element => {
	const [coords, setCoords] = useState<{value: string; label: string}>({ value: "51.1:17.0333", label: "Wrocław (PL)" });
	const lat = coords.value.split(":")[0];
	const lon = coords.value.split(":")[1];
	let origin = "https://zany-ray-bonnet.cyclic.app";

	const { data, status } = useFetch<unknown>(origin + `/najwer23api/forecast/onecall?lat=${lat}&lon=${lon}`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
	});


	if (status === "error") {
		return <>Error :(</>
	}

	if (status === "fetching") {
		return <>Loading..</>
	}

	if (status === "done") {
		console.log(status, data)
		return <>123</>;
	}

	return <></>;
}