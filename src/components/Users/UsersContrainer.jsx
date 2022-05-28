import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setToggleFollowingProgress, unfollow,
} from "../../Redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followed: state.usersPage.followed,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose(connect(
    mapStateToProps, {
        follow,
        unfollow, setCurrentPage,
        setToggleFollowingProgress, getUsers
    }), withAuthRedirect)
(UsersContainer);


