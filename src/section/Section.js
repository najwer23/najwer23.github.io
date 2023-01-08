import "./Section.css"

export default function Section(props) {
	if (props.type == 2) {
		return (
			<>
				<section className="section-content">{props.content}</section>
			</>
		);
	}

	return (
		<>
			<section className="section-main">{props.content}</section>
		</>
	);
}
