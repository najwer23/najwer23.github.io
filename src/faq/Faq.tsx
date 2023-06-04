import { Nav } from "../nav/Nav"

export const Faq = (): JSX.Element => {
	return (
		<>
			<Nav />
			<div className="layout1">
				<div className="maxWidth900">
					<h1 className="fluid-h1">Who is a web developer?</h1>
					<p >A web developer is a professional who is responsible for designing, developing, and maintaining websites. They use programming languages such as HTML, CSS, and JavaScript to create the structure, style, and interactivity of websites. A web developer can be defined as someone who is specialized in the development of web applications and services (such as websites, apps, etc.) that run in a web browser. Web developers are responsible for ensuring that sites meet user expectations by ensuring they look good, run smoothly, and offer easy access points with no loading issues between pages or error messages. They are usually concerned with the back end or the programming aspect of creating a website or web application and are not to be confused with web designers, who only deal with the aesthetics of a website or application. Web developers can come from different educational disciplines because web development is one of those fields where once a person has the required skills, they can be employed as a web developer.</p>
				</div>
			</div>
		</>

	)
}

