import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         
          <Route path="/" element={<Home />} />
          </Routes>
          </div>
    </BrowserRouter>
  );
};

export default App;


