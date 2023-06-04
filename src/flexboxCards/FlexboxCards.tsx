import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faCss3Alt, faHtml5, faJs, faNode, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import "./FlexboxCards.css"

export const FlexboxCards = (): JSX.Element => {
	return (
		<>
			<div className="layout1">
				<h2 className="h2-fluid">Technologies that I use in my daily work</h2>
				<div className="flexbox-cards-container">

					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<FontAwesomeIcon icon={faReact} color="#61DBFB"/>
						</div>
						<div className="flexbox-card-item-text">
							<p>React is a free and open-source front-end JavaScript library for building user interfaces based on components that makes it painless to create interactive UIs, design simple views for each state in your application, and efficiently update and render just the right components when your data changes.</p>
						</div>
					</div>

					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<FontAwesomeIcon icon={faNode} color="#3c873a"/>
						</div>
						<div className="flexbox-card-item-text">
							<p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser and is used for executing JavaScript code outside of a web browser, creating server-side applications, and building fast and scalable server-side and networking applications.</p>
						</div>
					</div>

					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<FontAwesomeIcon icon={faJs} color="#f0db4f"/>
						</div>
						<div className="flexbox-card-item-text">
							<p>JavaScript is a high-level, dynamic, and interpreted programming language that is used to create interactive and dynamic web pages, mobile applications, and desktop applications, and is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
						</div>
					</div>

					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<FontAwesomeIcon icon={faHtml5} color="#e34c26"/>
						</div>
						<div className="flexbox-card-item-text">
							<p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser, and it defines the meaning and structure of web content by using "markup" to annotate text, images, and other content for display in a web browser.</p>
						</div>
					</div>

					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<FontAwesomeIcon icon={faCss3Alt} color="#264de4"/>
						</div>
						<div className="flexbox-card-item-text">
							<p>CSS3 (Cascading Style Sheets level 3) is the latest version of the CSS specification, which adds several new styling features and improvements to enhance the web presentation capabilities, and it is used to describe the presentation of a document written in HTML or XML.</p>
						</div>
					</div>


					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<FontAwesomeIcon icon={faAws} color="#FF9900"/>
						</div>
						<div className="flexbox-card-item-text">
							<p>AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon. It provides on-demand cloud computing platforms and APIs for reliable, scalable, and cost-effective cloud computing solutions.</p>
						</div>
					</div>


					<div className="flexbox-cards-item">
						<div className="flexbox-card-item-img">
							<img src={`${process.env.PUBLIC_URL}/ts.png`} alt="typescript" height={100} width={100} />
						</div>
						<div className="flexbox-card-item-text">
							<p>TypeScript is a superset of JavaScript that adds optional static typing and advanced features to JavaScript, designed by Microsoft to address the limitations of JavaScript and unlock the power of static typing in building robust and scalable web applications.</p>
						</div>
					</div>


				</div>
			</div>
		</>

	)
}

// <img src={`${process.env.PUBLIC_URL}/f.png`} />

