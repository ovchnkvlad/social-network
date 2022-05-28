import React from 'react';
import {NavLink} from "react-router-dom";

const Header = ({isAuth,login}) => {
    return (<header>
        <div className="logo">
            <img
                src="https://blablabla-agency.com/wp-content/uploads/2020/10/LOGO-NEW-BLABLABLA-TRANS-e1612595678262.png"
                width="200px" alt=""/>
        </div>
        <div className="auth-menu">
                 <span className="auth-menu-link">

                     {isAuth? login : <NavLink to="/login" >Login</NavLink>}

                 </span>
        </div>
    </header>)
};

export default Header;