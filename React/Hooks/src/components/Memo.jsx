import React, { useState } from 'react';

const Memo = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    return (
        <div>
            <input
                placeholder="a"
                type="text"
                value={a}
                onChange={(e) => setA(e.target.value)}
            />
            <input
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="b"
                type="text"
            />
            <Greet a={a} />
        </div>
    );
};

const Greet = React.memo(({ a }) => {
    console.log('greet funciton called');
    return <h1> Hello {a}</h1>;
});
export default Memo;
