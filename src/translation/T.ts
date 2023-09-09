import { useTranslationContext } from "./useTranslationContext";

const t: any = {
	pl: {

	},
};

export const T = (key:string) => {
	const {lang} = useTranslationContext();
	return t[lang] ? (t[lang][key] ?? key) : key;
}