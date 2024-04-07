import React from "react"
import { Outlet, Link } from "react-router-dom";
import './Navigation.css';


const Navigation = () => {
    return (
        
        <div className="nav-container">
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Outlet />
            </nav>
        </div>
    )
}

export default Navigation;