import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";

export default function PageAbout() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="page">
				<div className="about"></div>
			</div>
		</>
	);
}
