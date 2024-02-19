import { useState } from 'react';
import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = import.meta.env.VITE_STORAGE_KEY; // Replace with your own secret key

const encrypt = (data) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
    return encryptedData;
};

const decrypt = (encryptedData) => {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
    const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};

const useSecuredLocalStorage = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    const decryptedValue = storedValue ? decrypt(storedValue) : initialValue;

    const [value, setValue] = useState(decryptedValue);

    const updateSecuredLocalStorage = (newValue) => {
        const encryptedValue = encrypt(newValue);
        setValue(newValue);
        localStorage.setItem(key, encryptedValue);
    };

    return [value, updateSecuredLocalStorage];
};

export default useSecuredLocalStorage;
