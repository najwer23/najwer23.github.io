import "./Loader.css";

export default function Loader(props) {
	if (props.ldsGrid) {
		return (
			<>
				<div className="ldsGrid">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</>
		);
	}

	if (props.ldsEllipsis) {
		return (
			<>
				<div className="ldsEllipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</>
		);
	}
}
