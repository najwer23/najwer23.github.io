import { createContext } from "react";

const LanguageContext = createContext({
	language: "EN",
	setLanguage: () => {},
});

export default LanguageContext;