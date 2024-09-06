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
