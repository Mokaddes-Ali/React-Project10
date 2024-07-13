import React, { useState } from 'react';

const ChangeDirectionButton = () => {
  const [isLeft, setIsLeft] = useState(true);

  const toggleDirection = () => {
    setIsLeft(!isLeft);
    document.documentElement.dir = isLeft ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        onClick={toggleDirection}
      >
        {isLeft ? 'RTL' : 'LTR'}
      </button>
    </div>
  );
};

export default ChangeDirectionButton;
 
