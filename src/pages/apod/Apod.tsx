import { Text } from "najwer23storybook/lib/Text";
import styles from './index.module.css'
import { useFetch } from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface ApodData {
	title: string;
	explanation: string;
	media_type: "image" | "video";
	date: string;
	url: string;
}

interface ApodResponse {
	data: ApodData[]
}

export const Apod = () => {
	let origin = "https://zany-ray-bonnet.cyclic.app";

	const { data, status } = useFetch<ApodResponse>(origin + `/najwer23api/nasa/apod&offset=30&page=1`, {
		method: "GET",
	})

	return <div className={styles["apod"]}>
		<Text kind='h2'> APOD Generator from NASA </Text>
		<br />
		<br />
		<br />
		<br />

		{status !== "done" && <FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />}

		{data && status === "done" &&
			data.data.sort((a, b) => b.date.localeCompare(a.date)).map(({ title, explanation, media_type, url, date }) => (
				media_type === "image" &&
				<section key={title}>
					<div>
						<img src={url} alt={title} loading="lazy" />
					</div>
					<Text kind="h3"> {title} </Text>
					<Text kind="pSmallBold"> {date} </Text>
					<Text kind="p"> {explanation} </Text>
				</section>

			))}

	</div>
}