import React from "react"
import logo from "../logo.png";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";

function Header(){
    return(
<div className="bg">
    <img src={logo} className="App-logo responsive" alt="logo" />
        <ul className="topnav">
            <li className="right"> <NavLink to="/Contact" exact>Contact</NavLink></li>
            <li className="right"> <NavLink to="/Donate"  exact>Donate</NavLink></li>
            <li className="right"> <NavLink to="/Discussion"  exact>Discussion</NavLink></li>
            <li className="right"> <NavLink to="/Gallary"  exact>Gallary</NavLink></li>
            <li className="right"> <NavLink to="/Board"  exact>Board</NavLink></li>
            <li className="right"> <NavLink to="/About" exact>About</NavLink></li>
            <li className="right"> <NavLink to="/"  exact>Home</NavLink></li>
        </ul>

        </div>

    )
}
export default Header



