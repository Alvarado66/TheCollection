import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <>
        <nav>
        <ul className="nav-links">
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Comments</a></li>
        </ul>
        </nav>
        </>
    );
}

export default Navbar;