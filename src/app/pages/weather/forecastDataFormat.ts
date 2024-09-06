import { isEmpty } from '@najwer23/utils/functions/isEmpty';

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
