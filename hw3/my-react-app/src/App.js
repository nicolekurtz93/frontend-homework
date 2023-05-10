import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Houses from './pages/Houses/Houses';
import Home from './pages/Home';
function App() {


  return (
    <><BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/houses' element={<Houses />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
