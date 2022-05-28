import React from 'react';
import avatar from "../../../assets/images/avatar.jpeg";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (  <div className="user-item" id={props.id}>
        <div className="user-info">
            <NavLink to={`profile/${props.id}`}>
                <img src={props.photos.small ? props.photos.small : avatar} alt="" width={50}/>
            </NavLink>
            {props.followed ?
                <button className='follow-btn' disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => {
                            props.unfollow(props.id)
                        }}>Unfollow</button> :
                <button className='follow-btn' disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => {
                            props.follow(props.id)
                        }}>Follow</button>}

        </div>
        <div className="user-description">
            <div className="user-name">
                {props.name}
            </div>
            <div className="user-status">
                "{props.status ? props.status : 'No status'}"
            </div>
        </div>
        <div className="user-location">
            <span>City,Country</span>
        </div>
    </div>);
};

export default UserItem;