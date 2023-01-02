import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPenNib } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
	const socialLinks = {
		"https://github.com/najwer23": (
			<FontAwesomeIcon icon={faGithub} />
		),
		"https://twitter.com/najwer23": (
			<FontAwesomeIcon icon={faTwitter} />
		),
		"mailto:najwer23@live.com": <FontAwesomeIcon icon={faAt} />,
		"https://www.linkedin.com/in/najwer23/": (
			<FontAwesomeIcon icon={faLinkedinIn} />
		),
	};

	return (
		<footer>
			<div className="footer-push"></div>

			<div className="footer-container-wrapper">
				<div className="footer-container">
					<div className="footer-container-col">
						<div className="footer-container-child">
							<FontAwesomeIcon icon={faCopyright} size="1x" /> Mariusz Najwer
						</div>

						<div className="footer-social">
							{Object.keys(socialLinks).map((v, i) => (
								<a
									key={i}
									href={v}
									rel="noreferrer"
									target="_blank"
									className="noselect"
								>
									<div className="foot-social-item">{socialLinks[v]}</div>
								</a>
							))}
						</div>

						<div className="footer-container-child">
								<FontAwesomeIcon icon={faPenNib} size="1x" /> 25.09.2022, 22:17
							</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
