import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from '../store/atoms';

const Rec = () => {
    const count = useRecoilValue(countAtom);
    return (
        <div>
            <div>THe value of count is:{count}</div>
            <Button />
        </div>
    );
};

const Button = () => {
    console.log('button called');
    const setCount = useSetRecoilState(countAtom);
    return (
        <button onClick={() => setCount((prev) => prev + 1)}>setCOunt</button>
    );
};
export default Rec;
