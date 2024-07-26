import { createContext, useContext, useState } from 'react';
import UsContext from './UsContext';

const countContext = createContext({});

const CountContxtProvider = countContext.Provider;

const useCount = () => {
    return useContext(countContext);
};

function Counter() {
    const [a, setA] = useState(0);
    return (
        <CountContxtProvider value={{ a, setA }}>
            <UsContext />
        </CountContxtProvider>
    );
}

export { useCount };
export default Counter;
