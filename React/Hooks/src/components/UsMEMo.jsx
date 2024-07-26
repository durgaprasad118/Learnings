import React, { useMemo, useState } from 'react';

//caches the result of a value
const UsMEMo = () => {
    const [n, setN] = useState(1);
    const [val, setVal] = useState(0);
    let summ = useMemo(() => sum(n), [n]);
    return (
        <div>
            <div> Val is {val}</div>
            <div> sum is {summ}</div>
            <button onClick={() => setVal(val + 1)}>Inc val</button>
            <button onClick={() => setN(n + 1)}>Inc sum</button>
        </div>
    );
};

function sum(n) {
    console.log('sum func called');
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        answer += i;
    }
    return answer;
}
export default UsMEMo;
