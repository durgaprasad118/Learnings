import React from 'react';
import { useCount } from './dp';

const UsContext = () => {
    const { a } = useCount();
    return (
        <div>
            <div>Value of a is : {a}</div>
            <Button />
        </div>
    );
};

const Button = () => {
    console.log('buton claled');
    const { setA } = useCount();
    return <button onClick={() => setA((prev) => prev + 1)}>inc a</button>;
};
export default UsContext;
