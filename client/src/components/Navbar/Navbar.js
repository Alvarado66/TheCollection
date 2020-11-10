import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {

    const [open, setOpen] = useState (false);

    return (
        
        <>
        <div>
        <nav>
            <div className="brandLogo"></div>
        <ul className="nav-links" style={{ transform: open ? "translateX(0px)" : "translateX(-500px)" }}>
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Comments</a></li>
            <li><a>Contact</a></li>
            
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burgerMenu"></i>
        </nav>
        
        </div>

        </>
    );
}

export default Navbar;