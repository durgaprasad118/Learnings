import React, { useState } from 'react';

const UState = () => {
    const [c, setC] = useState(0);
    return (
        <div>
            <div>Value is :{c}</div>
            <button onClick={() => setC(c + 1)}> Inc</button>
            <button onClick={() => setC(0)}> Reset</button>
            <button onClick={() => setC(c - 1)}> Dec</button>
        </div>
    );
};

export default UState;
