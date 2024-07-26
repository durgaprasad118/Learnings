import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ueffect = () => {
    const [val, setVal] = useState({});
    const [loading, setLoading] = useState(false);
    const [x, setX] = useState(1);
    const fetchData = async (item) => {
        try {
            setLoading(true);
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/' + item
            );
            setVal(data);
            setLoading(fasle);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData(x);
    }, [x]);
    return (
        <div>
            <div>{loading ? 'loading....' : val.title}</div>
            <button onClick={() => setX(x + 1)}>inc x</button>
        </div>
    );
};

export default Ueffect;
