import {BrowserRouter as Router,Route, Routes } from'react-router-dom';
import React, { useEffect, useState } from "react";
import Home from './Components/Home/Home';
import './Index.css'
import Navbar from './Components/Navbar/Navbar';
import ATM from './Components/ATM/ATM';
import Blog from './Components/Blog/Blog';

function App() {

  const [isActive,setIsActive] = useState(false);
  const [activeBank,setActiveBank] = useState("");

  


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} ></Route>
          <Route path='/atm' exact element={<ATM isActive={isActive} setIsActive={setIsActive}
          activeBank={activeBank} setActiveBank={setActiveBank} />} ></Route>
          <Route path='/blog' exact element={<Blog />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
