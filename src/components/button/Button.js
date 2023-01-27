import "./Button.css";

export default function Button(props) {

	function handleClick(e) {
		if (props.onClick !== undefined) {
			props.onClick(e);
		}
	}

	return (
		<>
			<button
				className={"noselect " + props.additionalClass}
				type="submit"
				onClick={handleClick}
				disabled={props.disabled}
				style={props.style}
			>
				{props.text}
			</button>
		</>
	);
}
