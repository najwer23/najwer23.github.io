import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";


export default function PageAbout() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="about">
				<div className="section-title">
					{Trans.t[language].about.title}
				</div>
				<div className="section-title-line"></div>
				<div className="section-desc">
					{Trans.t[language].about.desc}
				</div>
			</div>
		</>
	);
}
