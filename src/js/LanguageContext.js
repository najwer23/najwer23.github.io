import { createContext } from "react";

const LanguageContext = createContext({
	language: "PL",
	setLanguage: () => {},
});

export default LanguageContext;