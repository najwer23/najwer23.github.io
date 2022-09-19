import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";

export default function ChangeLanguage(props) {
	const { language, setLanguage } = useContext(LanguageContext);

	function detectColorByLanguage(v) {
		let lan = {
			"PL" : "orangered",
			"EN" : "orangered",
		}
		return v == language ? lan[v] : "";
	}

	return (
		<>
			<div className="language non-printable">
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
		</>
	);
}
