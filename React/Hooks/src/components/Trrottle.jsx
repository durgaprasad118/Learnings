import React from 'react';

const Trrottle = () => {
    const mythrottle = (fn, delay) => {
        return function (...args) {
            setTimeout(() => {
                fn();
            }, delay);
        };
    };
    const newFn = mythrottle(() => {
        console.log('button clicked');
    }, 5000);
    return (
        <div>
            <button onClick={newFn}>click to throttle</button>
        </div>
    );
};

export default Trrottle;
