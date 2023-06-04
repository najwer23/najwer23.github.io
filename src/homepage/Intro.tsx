import { Link, useNavigate } from "react-router-dom";
import "./Intro.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";


const SOCIAL_MEDIA = [
	{
		title: "Github",
		path: "https://github.com/najwer23",
		icon: <FontAwesomeIcon icon={faGithub} />,
		outPage: true
	},
	{
		title: "Twitter",
		path: "https://twitter.com/najwer23",
		icon: <FontAwesomeIcon icon={faTwitter} color={"#1DA1F2"}/>,
		outPage: true
	},
	{
		title: "Linkedin",
		path: "https://www.linkedin.com/in/najwer23/",
		icon: <FontAwesomeIcon icon={faLinkedinIn} color={"#0e76a8"}/>,
		outPage: true
	},
	{
		title: "Mail",
		path: "/contact",
		icon: <FontAwesomeIcon icon={faAt} color={"lightgrey"}/>,
	},
	{
		title: "Résumé",
		path: "https://najwer23.github.io/resume/",
		icon: <FontAwesomeIcon icon={faFilePdf} color={"orangered"}/>,
		outPage: true

	},
];

export const Intro = () : JSX.Element => {
	return (
		<>
			<div className='layout1 intro'>
				<h2>Hello, I'm a Web Developer</h2>
				<h3 className="fluid-h3">Fond of creating web application designs and bring them to life using code & develop mobile designs</h3>

				<div className="social-media">
					{SOCIAL_MEDIA &&
						SOCIAL_MEDIA.map((v, i) => (
							<span key={i}>
								{ v.outPage ? (
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
								) : (
										<Link title={v.title}  to={v.path} className="noselect">
										<span className="social-media-item">{v.icon}</span>
									</Link>
								)}
							</span>
						))}
				</div>
			</div>
		</>
	)
}
