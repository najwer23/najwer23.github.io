import LanguageContext from "./LanguageContext";
import { useState, useEffect, useContext } from "react";
import * as Trans from "./data/Translation";

export default function PageEducation() {
	const { language, setLanguage } = useContext(LanguageContext);

	return (
		<>
			<div className="education">
				<div className="section-title">{Trans.t[language].education.title}</div>
				<div className="section-title-line"></div>
				<div className="education-schools">
					<div className="section-2-col">
						<div className="section-2-col-logo">
							<img
								src={`${process.env.PUBLIC_URL}/img/pwr.png`}
								width="69px"
								height="69px"
							/>
						</div>
						<div className="section-2-col-desc">
							<div className="section-2-col-desc-title">
								{Trans.t[language].education.descTitle}
							</div>
							<div className="section-2-col-desc-desc">
								<div className="section-desc">
									{Trans.t[language].education.desc1}
								</div>
								<div className="section-desc">
									{Trans.t[language].education.desc2}
								</div>
							</div>
						</div>
					</div>

					<div className="section-2-col">
						<div className="section-2-col-logo">
							<img
								src={`${process.env.PUBLIC_URL}/img/pwr.png`}
								width="69px"
								height="69px"
							/>
						</div>
						<div className="section-2-col-desc">
							<div className="section-2-col-desc-title">
								{Trans.t[language].education.descTitle}
							</div>
							<div className="section-2-col-desc-desc">
								<div className="section-desc">
									{Trans.t[language].education.desc3}
								</div>
								<div className="section-desc">
									{Trans.t[language].education.desc4}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
