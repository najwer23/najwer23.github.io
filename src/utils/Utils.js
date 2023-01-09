export function saveToCookie(data) {
	return true;
}

export function isEmpty(v) {
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

export function deleteCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function setCookie(cname, cvalue, exhours) {
  const d = new Date();
  d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}

export function getCookie(cname, isObj=false) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
			if (isObj) {
				return JSON.parse(c.substring(name.length, c.length));
			}
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setLocalStorageCookie(key, value, exhours) {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + exhours * 60 * 60 * 1000,
	};
	localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorageCookie(key) {
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

export function dateFormatterFromDt(dt) {
	return isEmpty(dt) ? null : new Date(dt * 1000).toLocaleString();
}
