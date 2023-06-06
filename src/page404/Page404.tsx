import { useEffect } from "react";
import { Button } from "../buttons/Button";
import "./Page404.css"
import { useNavigate } from "react-router-dom";

export const Page404 = (): JSX.Element => {
	let navigate = useNavigate();

	useEffect(() => {
		document.body.classList.add('bg404');
		return () => {
			document.body.classList.remove('bg404');
		}
	}, []);


	function handleClick() {
		navigate("/");
	}

	return (
		<>
			<section className="page_404">

				<h1 className="fluid-h1">404</h1>
				<div className="four_zero_four_bg"></div>
				<h2 className="fluid-h2">
					Look like you're lost
				</h2>
				<p>the page you are looking for not avaible!</p>
				<Button
					type={"button"}
					onClick={handleClick}
					className={'noselect snail green'}
					title={"Home"}
					ariaLabel={"Home"}
					text={"Home"}
				/>

			</section>
		</>
	)
}