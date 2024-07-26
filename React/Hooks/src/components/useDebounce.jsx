import { useEffect, useState } from 'react';

const useDebounce = (value) => {
    const [a, setA] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => setA(value), 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [value]);
    return a;
};

export { useDebounce };
