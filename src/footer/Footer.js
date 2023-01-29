import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPenNib } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
	const SOCIAL_MEDIA = [
		{
			title: "Github",
			path: "https://github.com/najwer23",
			icon: <FontAwesomeIcon icon={faGithub} />,
		},
		{
			title: "Twitter",
			path: "https://twitter.com/najwer23",
			icon: <FontAwesomeIcon icon={faTwitter} />,
		},
		{
			title: "Mail - najwer23@live.com",
			path: "mailto:najwer23@live.com",
			icon: <FontAwesomeIcon icon={faAt} />,
		},
		{
			title: "Linkedin",
			path: "https://www.linkedin.com/in/najwer23/",
			icon: <FontAwesomeIcon icon={faLinkedinIn} />,
		},
	];

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
							{SOCIAL_MEDIA &&
								SOCIAL_MEDIA.map((v, i) => (
									<a
										key={i}
										href={v.path}
										rel="noreferrer"
										title={v.title}
										target="_blank"
										className="noselect"
										aria-label={v.title}
									>
										<div className="foot-social-item">{v.icon}</div>
									</a>
								))}
						</div>

						<div className="footer-container-child">
							<FontAwesomeIcon icon={faPenNib} size="1x" /> 29.01.2023, 16:06
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
