import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

export const Footer = () : JSX.Element => {
	return (
		<>
			<footer>
			<div className="footer-push"></div>

				<div className="footer-container-wrapper">
					<div className="layout1">
						<div>
							<p style={{color:"white", fontSize: "16px"}}>
								<span><FontAwesomeIcon icon={faCopyright} size="1x" /></span>
								{" "}
								<span><FontAwesomeIcon icon={faPenNib} size="1x" /> 06.06.2023, 21:54</span>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}