import './App.css';
import React from "react";
import Login from './Components/Login'
import Home from './Components/Home'
import Homeregister from './Components/Homeregister'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
