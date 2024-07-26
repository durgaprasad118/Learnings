import React, { useRef } from 'react';

const Ref = () => {
    const ref = useRef(null);
    return (
        <div>
            <input
                style={{ display: 'block' }}
                placeholder="Enter some input"
                ref={ref}
            />
            <button onClick={() => ref.current.focus()}>
                Click to focus on the input
            </button>
        </div>
    );
};

export default Ref;
