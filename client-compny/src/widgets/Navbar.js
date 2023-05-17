import React from "react";
import {NavLink } from "react-router-dom"
import "./Navbar.css"
function App() {
    return (
        <>
            <div className='nav'>
                <ul>
                    <li><NavLink to="/homepage" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/company" activeClassName="active">Company-Add</NavLink></li>
                    <li><NavLink to="/person" activeClassName="active">Person-Add</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>

                </ul>
            
            </div>
        </>
    )
}

export default App;
