import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const setActive = ({ isActive }) =>(isActive ? "active" : "");
    return (<aside>
        <nav>
            <NavLink to="/profile" className={setActive}>Profile</NavLink>
            <NavLink to="/dialogs" className={setActive}>Message</NavLink>
            <NavLink to="/users" className={setActive}>Users</NavLink>
            <NavLink to="/music" className={setActive}>Music</NavLink>
             <br/>
            <NavLink to="/settings" className={setActive}>Settings</NavLink>

        </nav>
    </aside>)
};

export default Navbar;