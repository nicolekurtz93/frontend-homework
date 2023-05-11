import './App.css';
import {React, useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Houses from './pages/Houses/Houses';
import Home from './pages/Home';
import { fetchData } from './pages/Utils';
import Navbar from './pages/Nav';
function App() {
  const [throneData, setThroneData] = useState([]);

  useEffect(() => {
      fetchData().then(data => setThroneData(data))
  }, [])

  return (
    <Navbar throneData={throneData} />
  );
}

export default App;
