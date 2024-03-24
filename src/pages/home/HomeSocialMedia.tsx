import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from './index.module.css'

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


export const HomeSocialMedia = () => {
	return <div className={styles["socialMedia"]}>
		{SOCIAL_MEDIA &&
			SOCIAL_MEDIA.map(({ path, title, icon }) => (
				<span key={path + title}>
					<a href={path} target="_blank" rel="noopener noreferrer" aria-label={title} title={title}>
						{icon}
					</a>
				</span>
			))}
	</div>
}