// ColorHandler.jsx
import React from 'react';
import { useColorContext } from './ColorContext';

const ColorHandler = () => {
    const { changeColor } = useColorContext();

    return (
        <div className="p-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={changeColor}
            >
                Change Color
            </button>
        </div>
    );
};

export default ColorHandler;
