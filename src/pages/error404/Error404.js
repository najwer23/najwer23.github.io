import "./Error404.css";
import ButtonLink from "../../components/button/ButtonLink";


export default function Error404(props) {

	return (
		<>
			<div className="flex-container404">
				<div className="text-center">
					<h1>
						<span className="fade-in" id="digit1">
							4
						</span>
						<span className="fade-in" id="digit2">
							0
						</span>
						<span className="fade-in" id="digit3">
							4
						</span>
					</h1>
					<h3 className="fadeIn">PAGE NOT FOUND</h3>
					<ButtonLink link={"/"} text={"RETURN TO HOMEPAGE"} />
				</div>
			</div>
		</>
	);
}
