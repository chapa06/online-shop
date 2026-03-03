import { useState, useEffect } from "react";

export function localStrorageHook<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка при чтении из LocalStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Ошибка при записи в LocalStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}