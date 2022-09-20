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
						<div className="footer-container-child">
							<FontAwesomeIcon icon={faPenNib} size="1x" /> 21.09.2022, 00:33
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
					</div>

					<div className="footer-container-col center">Be Alive</div>

					<div className="footer-container-col right">
						<div className="footer-container-child">Podróże</div>
						<div className="footer-container-child">
							<a
								href="https://najwer23.github.io/resume/"
								rel="noreferrer"
								target="_blank"
								className="noselect"
							>
								<div className="foot-social-item">O mnie</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
