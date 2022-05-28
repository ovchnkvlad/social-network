import React from 'react';
import UserItem from "./UserItem/UserItem";
import Preloader from "../common/Preloader";

const   Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <=
    pagesCount; i++) {
        pages.push(i);
    }
    return (<>
        <div className='users-wrapper'>
            <h2>Users</h2>
            <div className="pagination">
                {pages.map(p => {
                    return <span className={props.currentPage === p && 'active'} onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
                })}
            </div>
            {props.isFetching ?
                <Preloader/> : props.users.map((item) =>
                    (<UserItem key={item.id} {...item}
                               follow={props.follow}
                               unfollow={props.unfollow}
                               followingInProgress={props.followingInProgress}
                               setToggleFollowingProgress={props.setToggleFollowingProgress}
                    />)
                )}
        </div>
    </>)
}

export default Users;