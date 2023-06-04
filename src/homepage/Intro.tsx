import { Button } from "../buttons/Button"
import { useNavigate } from "react-router-dom";
import "./Intro.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faAt, faPenNib } from "@fortawesome/free-solid-svg-icons";

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
		title: "Linkedin",
		path: "https://www.linkedin.com/in/najwer23/",
		icon: <FontAwesomeIcon icon={faLinkedinIn} />,
	},
];

export const Intro = () : JSX.Element => {
	let navigate = useNavigate();

	function handleClick() {
		navigate("contact");
	}

	return (
		<>
			<div className='layout1 intro'>
				<h2>Hello, I'm a Web Developer</h2>
				<h3 className="fluid-h3">Fond of creating web application designs and bring them to life using code & develop mobile designs</h3>

				<div className="social-media">
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
								<span className="social-media-item">{v.icon}</span>
							</a>
						))}
				</div>

				<div style={{marginTop: "40px", marginBottom: "40px"}}>
					<Button
						type={"button"}
						onClick={handleClick}
						className={'noselect snail green'}
						title={"Connect"}
						ariaLabel={"Connect"}
						text={"CONNECT!"}
					/>
				</div>
			</div>
		</>
	)
}
