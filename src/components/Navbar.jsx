import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

function Navbar() {
    return (
        <div>
            <nav>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}><li>Home</li></NavLink>
                <NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "")}><li>About</li></NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive ? "active" : "")}><li>Contact</li></NavLink>

            </nav>
        </div>
    )
}

export default Navbar