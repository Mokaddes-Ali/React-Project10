import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ColorHandler from './Components/ColorHandler';
import { ColorProvider } from './Components/ColorContext';


const App = () => {
  return (
    <div className="container mx-auto">
       <ColorProvider>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <ColorHandler />
        </Routes>
      </div>
      </ColorProvider>
    </div>
  );
};

export default App;

