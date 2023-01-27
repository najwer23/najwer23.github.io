import "./Button.css";
import { Link } from "react-router-dom";

export default function ButtonLink(props) {

	return (
		<>
			<Link to={props.link} className="noselect button-link">
				{props.text}
			</Link>
		</>
	);
}
