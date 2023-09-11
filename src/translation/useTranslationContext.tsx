import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface LangContextValue {
	lang: string;
	setLang: Dispatch<SetStateAction<string>>;
}

const defaultState = {
	lang: "en",
	setLang: () => { }
};

interface Props {
	children: React.ReactNode;
}

const LangContext = createContext<LangContextValue>(defaultState);

export const LangProvider = ({ children }: Props) => {
	const [lang, setLang] = useState<string>("en");

	return (
		<LangContext.Provider value={{lang, setLang }}>
			{children}
		</LangContext.Provider>
	);
};

export const useTranslationContext = () => {
	const LangContextNew = useContext(LangContext);
	return LangContextNew;
};