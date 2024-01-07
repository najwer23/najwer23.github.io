import styles from './index.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Text } from "najwer23storybook/lib/Text";


const SOCIAL_MEDIA = [
	{
		title: "Github",
		path: "https://github.com/najwer23",
		icon: <FontAwesomeIcon icon={faGithub} color={"black"} />,
		outPage: true
	},
	{
		title: "Twitter",
		path: "https://twitter.com/najwer23",
		icon: <FontAwesomeIcon icon={faXTwitter} color={"black"} />,
		outPage: true
	},
	{
		title: "Linkedin",
		path: "https://www.linkedin.com/in/najwer23/",
		icon: <FontAwesomeIcon icon={faLinkedinIn} color={"black"} />,
		outPage: true
	},
	{
		title: "NPM",
		path: "https://www.npmjs.com/package/najwer23storybook",
		icon: <FontAwesomeIcon icon={faNpm} color={"black"} />,
		outPage: true
	}
];

export const HomeContent = () => {
	return (
		<>

			<div className={styles["homeContent"]}>
				<Text kind='h1'> Mariusz Najwer </Text>
				<div className={styles["homeContentText2"]}>Frontend Software Engineer</div>

				<div className={styles["socialMedia"]}>
					{SOCIAL_MEDIA &&
						SOCIAL_MEDIA.map(({ path, title, icon }) => (
							<span key={path + title}>
								<a href={path} target="_blank" rel="noopener noreferrer" aria-label={title} title={title}>
									{icon}
								</a>
							</span>
						))}
				</div>

				<div className={styles["pageLinks"]} >
					<a href='/#/contact'>Contact</a> /
					<a href='/#/weather'>Weather</a>
				</div>
			</div>

			<div className={styles["homeContent"]}>
				<Text kind='h2'>
					What is a Frontend Software Engineer?
				</Text>
				<Text kind='p'>
					A frontend software engineer is a professional who focuses on the user-facing side of software, working on everything that users see and interact with while using an application. They are responsible for creating platforms that are visually appealing, easy to use, and meet the client or company's needs. Their work involves aspects such as functionality, layout, speed, and user experience. Frontend engineers typically plan, design, build, and implement the user interface systems of websites, software programs, and web-based applications. They are also known as front-end developers and are considered software engineers who specialize in website and web application design using technologies such as HTML, CSS, and JavaScript. This role requires a combination of coding and creativity, making it suitable for those interested in technology and design
				</Text>
			</div>


			<div className={styles["homeContentSpace"]}></div>

		</>
	)

}