import { useState } from 'react';
import { APP_PREFIX } from '../config';

const useLocalStorage = (key, initialValue) => {
  // Get stored value from local storage or use initialValue
  const storedValue = JSON.parse(localStorage.getItem(APP_PREFIX + key)) || initialValue;

  // State to track the current value
  const [value, setValue] = useState(storedValue);

  // Update local storage whenever the state changes
  const updateLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateLocalStorage];
};

export default useLocalStorage;
