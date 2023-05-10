import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
        </nav>
    );
};

export default Navbar;