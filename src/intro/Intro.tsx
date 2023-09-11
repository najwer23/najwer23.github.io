import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { IntroStyled, SocialMedia } from "./Intro.styled";


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
		icon: <FontAwesomeIcon icon={faTwitter} color={"black"} />,
		outPage: true
	},
	{
		title: "Linkedin",
		path: "https://www.linkedin.com/in/najwer23/",
		icon: <FontAwesomeIcon icon={faLinkedinIn} color={"black"} />,
		outPage: true
	},
	{
		title: "Leetcode",
		path: "https://leetcode.com/najwer23/",
		icon: <FontAwesomeIcon icon={faCode} color={"black"} />,
		outPage: true
	},
];

export const Intro = (): JSX.Element => {
	return (
		<IntroStyled>
			<h1>Hello, I'm a Web Developer</h1>
			<h2>Fond of creating web application designs and bring them to life using code & develop mobile designs</h2>

			<SocialMedia>
				{SOCIAL_MEDIA &&
					SOCIAL_MEDIA.map(({ path, title, icon }) => (
						<span key={path + title}>
							<Link to={path} target="_blank" rel="noopener noreferrer" aria-label={title} title={title}>
								{icon}
							</Link>
						</span>
					))}
			</SocialMedia>


			<article>
				<h3>Who is a web developer?</h3>
				<p>A web developer is a professional who is responsible for designing, developing, and maintaining websites. They use programming languages such as HTML, CSS, and JavaScript to create the structure, style, and interactivity of websites. A web developer can be defined as someone who is specialized in the development of web applications and services (such as websites, apps, etc.) that run in a web browser. Web developers are responsible for ensuring that sites meet user expectations by ensuring they look good, run smoothly, and offer easy access points with no loading issues between pages or error messages. They are usually concerned with the back end or the programming aspect of creating a website or web application and are not to be confused with web designers, who only deal with the aesthetics of a website or application. Web developers can come from different educational disciplines because web development is one of those fields where once a person has the required skills, they can be employed as a web developer.</p>
			</article>

			<article>
				<h3>I use React..</h3>
				<p>React is a popular JavaScript library that is widely used for web development. Here are some reasons why React is a favorite language of developers:</p>
				<ul>
					<li>Optimized development interface and coding language: React is a part of the JavaScript language, which makes it easy to learn and use. It provides an ultimately optimized development interface and coding language, which makes it simple to scale, and grants outstanding productivity.</li>
					<li>Reusable components: One of the chief benefits of using React is that developers can reuse components as many times as they need to. This makes the development process faster and more efficient</li>
					<li>Great performance: React minimizes DOM changes, which makes it faster than other JavaScript libraries. It also uses a virtual DOM, which makes it more efficient</li>
					<li>Flexible: React is remarkably flexible. Once you have learned it, you can use it on a vast variety of platforms to build quality user interfaces. React is a library, NOT a framework. Its library approach has allowed React to evolve into such a remarkable tool</li>
					<li>Stable code: UI components built with React are predictable, thanks to how its components are structured. This makes it easier to maintain and update code</li>
					<li>Access to a strong community: React has a large and active community of developers who contribute to its development and provide support to other developers</li>
				</ul>

				<p>Overall, React is a powerful and flexible library that provides developers with a range of benefits, including optimized development, reusable components, great performance, and stable code. Its popularity among developers is due to its ease of use, flexibility, and the benefits it provides for web development.</p>
			</article>

			<p style={{marginTop: "40px"}}>
				<i>The strength of JavaScript is that you can do anything. The weakness is that you will.</i>
			</p>

		</IntroStyled>
	)
}