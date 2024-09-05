export const storageItemSet = <T>(storage: Storage, key: string, value: T, exhours: number) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + exhours * 60 * 60 * 1000,
  };
  storage.setItem(key, JSON.stringify(item));
};
