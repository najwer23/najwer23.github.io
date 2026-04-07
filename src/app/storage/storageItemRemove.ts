export const storageItemRemove = (storage: Storage, key: string) => {
  storage.removeItem(key);
  return null;
};
