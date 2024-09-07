export const isEmpty = (v: any): boolean => {
  if (v === undefined) return true;

  if (
    typeof v == 'function' ||
    typeof v == 'number' ||
    typeof v == 'boolean' ||
    Object.prototype.toString.call(v) === '[object Date]'
  )
    return false;

  if (v == null || v.length === 0) return true;

  if (typeof v == 'object') {
    return Object.keys(v).length < 1;
  }

  return false;
};

export const sortArrOfObjByLabel = (arr: any) => {
  let result = [];
  result.push(arr[0]);
  result.push(arr.slice(1).sort((a: any, b: any) => (a.label < b.label ? -1 : Number(a.label > b.label))));
  return result.flat(1);
};

export const forecastDataFormat = (v: number | string, n: number) => {
  if (isEmpty(v)) {
    return '';
  } else if (n === 0) {
    return new Date(Number(v) * 1000).toLocaleString('en-us', { weekday: 'short' });
  } else if (n === 1) {
    return (Number(v) * 3.6).toFixed(2) + ` km/h`;
  } else if (n === 2) {
    return v + ` %`;
  } else if (n === 3) {
    return v + ` hPa`;
  } else if (n === 4) {
    return v + ` ${'\u00b0'}C`;
  } else if (n === 5) {
    return v + ` ${'\u00b0'}`;
  } else {
    return v;
  }
};

export const formatDateFromDt = (dt: number): string | null => {
  return isEmpty(dt)
    ? null
    : new Date(dt * 1000).toLocaleString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        year: 'numeric',
      });
};

export const formatDateFromDt2 = (dt: number): string | null => {
  if (isEmpty(dt)) return null;

  const date = new Date(dt * 1000);

  const formattedString = date.toLocaleString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const [datePart, timePart] = formattedString.split(', ');
  const [day, month, year] = datePart.split('.');

  return `${year}-${month}-${day}, ${timePart}`;
};
