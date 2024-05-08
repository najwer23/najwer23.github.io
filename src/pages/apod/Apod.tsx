import { Text } from "najwer23storybook/lib/Text";
import styles from './index.module.css'
import { useFetch } from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Button } from "najwer23storybook/lib/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "najwer23storybook/lib/Container";
import { Grid } from "najwer23storybook/lib/Grid";


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
	const { page } = useParams();
	const currentPage = Number(page) || 1;
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo({
			top: currentPage == 1 ? 0 : 300,
			behavior: "smooth",
		});
	}, [page]);

	const onClickPagination = (number: number) => navigate("/apod/page/" + (currentPage + number));

	const { data, status } = useFetch<ApodResponse>(import.meta.env.VITE_NAJWER23API_ORIGIN_PROD + `/najwer23api/nasa/apod?offset=30&page=${currentPage}`, {
		method: "GET",
	})

	return <Container kind="section">
		<div className={styles.apod}>

			<Text kind='h2'> NASA - picture of the day</Text>
			<br />
			<br />
			<br />
			<br />

			{status !== "done" && <FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />}

			{data && status === "done" &&
				<>
					{data.data.sort((a, b) => b.date.localeCompare(a.date)).map(({ title, explanation, media_type, url, date }, index) => (
						media_type === "image" &&
						<section key={title}>
							<Grid gap={{
								col: "100px",
								row: "15px"
							}} col={{
								mobile: 1,
								smallDesktop: 1,
								desktop: 2,
								tablet: 1
							}}>
								<div>
									<Text kind="h3"> {title} </Text>
									<Text kind="pSmallBold"> {date} </Text>
									<Text kind="p"> {explanation} </Text>
								</div>
								<div>
									<img src={url} alt={title} loading={index === 0 ? "eager" : "lazy"} />
								</div>
							</Grid>
						</section>
					))}

					<div className={styles.pagination}>
						<Button
							type={"button"}
							text={"Prev"}
							ariaLabel={"Prev page"}
							onClick={() => onClickPagination(-1)}
							disabled={currentPage < 2}
						/>
						<Button
							type={"button"}
							text={currentPage}
							ariaLabel={"Page " + currentPage}
							disabled
						/>
						<Button
							type={"button"}
							text={"Next"}
							ariaLabel={"Next page"}
							onClick={() => onClickPagination(1)}
						/>
					</div>
				</>
			}
		</div>
	</Container>
}