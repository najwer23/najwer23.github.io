import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

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

	return (
		<>
			<div className="utils non-printable">
				<div className="corner-left">
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

				<div className="corner-right">
					<button className="noselect" type="button" onClick={() => printPDF()}>
						<FontAwesomeIcon
							icon={faFilePdf}
							size="3x"
							style={{ color: "orangered" }}
						/>
					</button>
				</div>
			</div>
		</>
	);
}
