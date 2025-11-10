export const storageItemGet = (storage: Storage, key: string) => {
  const itemStr = storage.getItem(key);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    storage.removeItem(key);
    return null;
  }
  return item.value;
};
