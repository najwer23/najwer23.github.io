import "./Section.css"

export default function Section(props) {
	return (
		<>
			<section className="section-main">{props.content}</section>
		</>
	);
}
