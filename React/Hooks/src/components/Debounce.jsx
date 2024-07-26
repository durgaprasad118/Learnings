import React, { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

const Debounce = () => {
    const [val, setVal] = useState('');
    const debouncedValue = useDebounce(val);
    useEffect(() => {
        console.log(debouncedValue);
    }, [debouncedValue]);
    return (
        <div>
            <input
                placeholder="input here"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
        </div>
    );
};

export default Debounce;
