// ColorContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = [
        { background: 'bg-gray-300', text: 'text-gray-700' },
        { background: 'bg-blue-500', text: 'text-white' },
        { background: 'bg-green-500', text: 'text-white' },
        { background: 'bg-yellow-500', text: 'text-white' },
        { background: 'bg-red-500', text: 'text-white' },
        { background: 'bg-purple-500', text: 'text-white' },
    ];

    const changeColor = () => {
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    };

    return (
        <ColorContext.Provider value={{ colors, changeColor }}>
            {children}
        </ColorContext.Provider>
    );
};
