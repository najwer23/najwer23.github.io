import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faFilm } from "@fortawesome/free-solid-svg-icons";


const objSocialLinks = {
	"https://github.com/najwer23": <FontAwesomeIcon icon={faGithub} size="2x" />,
	"https://twitter.com/najwer23": (
		<FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "#1DA1F2" }} />
	),
	"mailto:najwer23@live.com": <FontAwesomeIcon icon={faAt} size="2x" />,

	"https://www.linkedin.com/in/najwer23/": (
		<FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: "#0e76a8" }}/>
	),

	"https://www.filmweb.pl/user/Skold": (
		<FontAwesomeIcon icon={faFilm} size="2x" style={{ color: "orange" }}/>
	),
};

export default function ChangeLanguage(props) {
	const { language, setLanguage } = useContext(LanguageContext);

	function detectColorByLanguage(v) {
		let lan = {
			"PL" : "orangered",
			"EN" : "orangered",
		}
		return v == language ? lan[v] : "";
	}

	function printPDF() {
		window.print();
	}

	function openLink(link) {
		window.open(link, "_blank");
	}

	return (
		<>
			<div className="utils non-printable">
				<div className="corner-left">
					<div className="language">
						<button
							className="noselect"
							type="button"
							onClick={() => setLanguage("PL")}
							style={{ background: detectColorByLanguage("PL") }}
						>
							PL
						</button>
						<button
							className="noselect"
							type="button"
							onClick={() => setLanguage("EN")}
							style={{ background: detectColorByLanguage("EN") }}
						>
							EN
						</button>
					</div>
					<div className="update">
						20.09.2022, 17:46
					</div>
				</div>

				<div className="corner-right">
					<button
						className="noselect"
						type="button"
						onClick={() => printPDF()}
						style={{ marginLeft: "10px" }}
					>
						<FontAwesomeIcon
							icon={faFilePdf}
							size="2x"
							style={{ color: "orangered" }}
						/>
					</button>

					{Object.keys(objSocialLinks).map((v, i) => (
						<button
							key={i}
							className="noselect"
							type="button"
							onClick={() => openLink(v)}
						>
							{objSocialLinks[v]}
						</button>
					))}
				</div>
			</div>
		</>
	);
}
