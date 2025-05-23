import React from "react";
import logo from "../assets/graphic.svg";
import "./navbar.css";
const Nav = () => {
    return (
        <div className="navbar">
            <div className="logo">&lt;J/L&gt;</div>
            <div className="menu">
                <h3 className="menu-item">Home</h3>
                <h3 className="menu-item">About</h3>
                <h3 className="menu-item">Projects</h3>
                <h3 className="menu-item">Contact</h3>
            </div>
        </div>
    )
};

export default Nav;