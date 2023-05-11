import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search';
import Houses from './Houses';
import Home from './Home';

export const Navbar = (props) => {
    const {throneData} = props;
    return (
        <><nav className="navbar navbar-expand navbar-light text-align-center bg-primary">
            <ul className="navbar-nav d-flex flex-wrap">
                <li className="nav-item active p-2">
                    <a className="nav-link text-white font-weight-bold" href="/">Home </a>
                </li>
                <li className="nav-item p-2">
                    <a className="nav-link text-white font-weight-bold" href="/houses">Houses</a>
                </li>
                <li className="nav-item p-2">
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