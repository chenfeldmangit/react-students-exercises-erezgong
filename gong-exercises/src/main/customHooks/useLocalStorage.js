import {useState} from "react";

export default function useLocalStorage(key, init) {
    const [value, setValue] = useState(init);
    localStorage.setItem(key, JSON.stringify(init));

    const setLocalStorageValue = newValue => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    return [value, setLocalStorageValue];
};