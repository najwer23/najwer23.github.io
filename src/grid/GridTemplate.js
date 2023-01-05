import "./GridTemplate.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


export default function GridTemplate(props) {
	const POST = props.arr;
	const TITLE = props.title

	return (
		<>
			{TITLE && <h2>{TITLE}</h2> }
			<div className="grid-container">
				{POST &&
					POST.map((v, i) => (
						<div key={i} className="grid-child noselect">
							{v.outPage ? (
								<a
									href={v.path}
									rel="noreferrer"
									title={v.title}
									target={"_blank"}
									className="grid-child noselect"
								>
									<span className="grid-child-container">
										<span className="grid-child-title">
											{v.title}
											<br />
											<br />
											<FontAwesomeIcon icon={faEye} />
										</span>
										{/* <img src={`${process.env.PUBLIC_URL}` + v.src} /> */}
										<img src={v.src} />
										<span className="grid-child-info">{v.title}</span>
									</span>
								</a>
							) : (
								<Link
									to={v.path}
									title={v.title}
									className="grid-child noselect"
								>
									<span className="grid-child-container">
										<span className="grid-child-title">
											{v.title}
											<br />
											<br />
											<FontAwesomeIcon icon={faEye} />
										</span>
										{/* <img src={`${process.env.PUBLIC_URL}` + v.src} /> */}
										<img src={v.src} />
										<span className="grid-child-info">{v.title}</span>
									</span>
								</Link>
							)}
						</div>
					))}
			</div>
		</>
	);
}
