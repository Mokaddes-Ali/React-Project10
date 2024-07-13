import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';



const App = () => {
  return (
    <div className="container mx-auto">
            <Navbar />
            
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      
    </div>
  );
};

export default App;

