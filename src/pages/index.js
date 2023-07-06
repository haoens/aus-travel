import React from "react";
import "./index.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <NavLink className="nav-link" to="/zoo">
                    Zoo
                </NavLink>
                <NavLink className="nav-link" to="/about">
                    About
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                    Contact Us
                </NavLink>
            </div>
        </>
    )
}



export default Navbar;
