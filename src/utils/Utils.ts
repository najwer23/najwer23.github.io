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

export const sortByKeyArrObj = (arr: any) => {
	let result = [];
	result.push(arr[0]);
	result.push(
		arr
			.slice(1)
			.sort((a: any, b: any) =>
				a.label < b.label ? -1 : Number(a.label > b.label)
			)
	);
	return result.flat(1);
}

export const isEmpty = (v: any): boolean => {
	if (v === undefined) return true;

	if (
		typeof v == "function" ||
		typeof v == "number" ||
		typeof v == "boolean" ||
		Object.prototype.toString.call(v) === "[object Date]"
	)
		return false;

	if (v == null || v.length === 0) return true;

	if (typeof v == "object") {
		return Object.keys(v).length < 1;
	}

	return false;
}

export const dateFormatterFromDt = (dt: any): string | null => {
	return isEmpty(dt) ? null : new Date(dt * 1000).toLocaleString();
}
