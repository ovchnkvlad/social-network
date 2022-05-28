import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = ({id,name}) => {
    const setActive = ({ isActive }) =>(isActive ? "active" : "");
    return (
        <NavLink to='/dialogs' className={setActive}><div className="dialogs-nav-item" id={id}>
        <div className="dialogs-avatar">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width='50'/>
        </div>
        <div className="dialogs-name">
            {name}
        </div>
    </div>
        </NavLink>)
};

export default DialogItem;