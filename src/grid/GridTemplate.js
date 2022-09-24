import "./GridTemplate.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const POST = [
	{
		path: "/",
		title: "Barcelona",
		src: "https://lh3.googleusercontent.com/pw/AL9nZEVlHcQasQcKFb-JhDP2tXGW9zuyhnMaXTNpFDBM8XZ3LSxv5pm6CIt18DDszUWJeVAF8AtqQiXDoxccgSzQaQyxJv4LemLudqJe8e9o_mfhKXQpm8gPEMtazwGvabc-g1X6xkaUWsqWU-MHH9VUzjXd=w723-h964-no?authuser=0",
	},
];

export default function GridTemplate() {
	return (
		<div className="grid-container">
			{POST &&
				POST.map((v, i) => (
					<Link key={i} href={v.path} title={v.title} className="grid-child">
						<span className="grid-child-container">
							<span className="grid-child-title">
								{v.title}
								<br />
								<br />
								<FontAwesomeIcon icon={faEye} size="x" />
							</span>
							{/* <img src={`${process.env.PUBLIC_URL}` + v.src} /> */}
							<img src={v.src} />
						</span>
				</Link>
			))}
		</div>
	);
}
