import React from "react";
import "./index.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="NavMenu">
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact Us
                </NavLink>
            </div>
        </>
    )
}



export default Navbar;
