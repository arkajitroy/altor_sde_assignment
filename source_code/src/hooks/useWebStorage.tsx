import { useEffect, useState } from "react";
import { TUseWebStorageProps } from "../@types/THooks.types";

const useWebStorage = ({ key, initialValue, storageType }: TUseWebStorageProps) => {
  const [storedValue, setStoredValue] = useState(() => {
    const storedItem = window[storageType].getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  });

  const setValue = (value: any) => {
    setStoredValue(value);
    window[storageType].setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === window[storageType] && event.key === key) {
        setStoredValue(event.newValue ? JSON.parse(event.newValue) : null);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, storageType]);

  return [storedValue, setValue];
};

export default useWebStorage;
