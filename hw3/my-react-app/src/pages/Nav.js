import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search';
import Houses from './Houses/Houses';
import Home from './Home';

export const Navbar = (props) => {
    const {throneData} = props;
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link text-white font-weight-bold" href="/">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white font-weight-bold" href="/houses">Houses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white font-weight-bold" href="/search">Search</a>
                </li>
            </ul>
        </nav><BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path='/houses' element={<Houses throneData={throneData} />} />
                    <Route path='/search' element={<Search thorneData={throneData} />} />
                </Routes>
            </BrowserRouter></>
    );
};

export default Navbar;