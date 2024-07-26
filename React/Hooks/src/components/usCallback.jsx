import React, { useCallback, useState } from 'react';

const UseCallbk = () => {
    const [a, setA] = useState(0);
    const Handler = useCallback(() => {
        setA((prev) => prev + 1);
    }, []);
    return (
        <div>
            <div>value of a is : {a}</div>
            <Button clickHandler={Handler} />
        </div>
    );
};

const Button = React.memo(({ clickHandler }) => {
    console.log('button clicked');
    return <button onClick={clickHandler}>CLick</button>;
});

export default UseCallbk;
