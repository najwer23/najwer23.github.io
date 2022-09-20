import "./fonts/FontMulish.css";
import "./App.css";
import LanguageContext from "./context/LanguageContext";
import { useState } from "react";

export default function App() {
	const [language, setLanguage] = useState("EN");

  return (
		<>
			<LanguageContext.Provider value={{ language, setLanguage }}>
				In progress..
				<br />
				<br />

				https://najwer23.github.io/resume/ <br />
			</LanguageContext.Provider>
		</>
	);
}

// src={`${process.env.PUBLIC_URL}/assets/images/undraw_percentages.svg`}
