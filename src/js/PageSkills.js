import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const obj = {
	1: <>JavaScript</>,
	2: <>React.js</>,
	3: <>jQuery</>,
	4: <>HTML5</>,
	5: <>CSS3</>,
	6: <>PHP</>,
	7: <>AWS</>,
	8: <>DynamoDB</>,
	9: <>JSON</>,
	10: <>Node.js</>,
	11: <>Webpack</>,
	12: <>Agile, Scrum & JIRA</>,
};

export default function PageSkills() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="skills">
				<div className="section-title">{Trans.t[language].skills.title}</div>
				<div className="section-title-line"></div>
				<div className="skills-container">
					{Object.keys(obj).map((v, i, arr) => (
						<div key={v}>
							{obj[v]}
							{i < arr.length - 1 ? (
								<FontAwesomeIcon
									icon={faCircle}
									size="2xs"
									style={{ color: "orangered", marginLeft: "10px" }}
								/>
							) : (
								""
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
