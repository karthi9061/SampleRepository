import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
const App = () => {
  return (
  <div>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
