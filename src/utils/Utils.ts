export const setLocalStorageCookie = <T>(key: string, value: T, exhours: number) => {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + exhours * 60 * 60 * 1000,
	};
	localStorage.setItem(key, JSON.stringify(item));
}

export const getLocalStorageCookie = (key: string) => {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) return null;
	const item = JSON.parse(itemStr);
	const now = new Date();

	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
}
