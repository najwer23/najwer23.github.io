import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";

export default function PageProjects2() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="projects">
				<div className="project">{Trans.t[language].projects.project8}</div>
				<hr />
				<div className="project">{Trans.t[language].projects.project10}</div>
			</div>
		</>
	);
}
