import "./fonts/FontMulish.css";
import "./App.css";
import LanguageContext from "./context/LanguageContext";

import HashRoutes from "./custom-routes/HashRoutes";
import { useState } from "react";

export default function App() {
	const [language, setLanguage] = useState("EN");

  return (
		<>
			<LanguageContext.Provider value={{ language, setLanguage }}>
				<HashRoutes />
			</LanguageContext.Provider>
		</>
	);
}

// src={`${process.env.PUBLIC_URL}/assets/images/undraw_percentages.svg`}
