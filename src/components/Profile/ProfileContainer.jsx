import React from 'react';
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {setToggleFetching} from "../../Redux/users-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 23844;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (<Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>)
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


export default compose(connect(mapStateToProps, {getUserProfile, setToggleFetching, getUserStatus, updateUserStatus}),
    withRouter)(ProfileContainer);