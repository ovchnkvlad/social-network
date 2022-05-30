import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setToggleFollowingProgress, unfollow,
} from "../../Redux/users-reducer";
import {
    getCurrentPage, getFollowed,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../Redux/users-selectors';
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <Users
                key={this.props.users.id}
                {...this.props}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followed: state.usersPage.followed,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        followed: getFollowed(state)
    }
}
export default compose(connect(
    mapStateToProps, {
        follow,
        unfollow, setCurrentPage,
        setToggleFollowingProgress, requestUsers
    }), withAuthRedirect)
(UsersContainer);


