import React from 'react';
import defaultCover from "../../../assets/images/cover.jpg";
import defaultAvatar from "../../../assets/images/avatar.jpeg";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return (<Preloader/>)
    }
    return (
        <div className="profile-wrapper">
            <div className="profile-cover">
                <img
                    src={defaultCover}
                    alt=""/>
            </div>
            <div className="profile-details">
                <div className="profile-avatar">
                    <img
                        src={profile.photos.large ? profile.photos.large : defaultAvatar}
                        alt=""/>
                </div>
                <div className="profile-description">
                    <div className="user-name">
                        <span>{profile.fullName}</span>
                    </div>
                    <div className="profile-status">
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                    <div className="user-information">
                        {/*<span> <b>Date of Birth:</b> 2 January 1996</span>*/}
                        {/*<span><b>Location:</b> Rivne, Ukraine</span>*/}
                        {/*<span><b>Education:</b> NTUU "KPI"</span>*/}
                        {profile.aboutMe ? <span><b>About ME: </b>{profile.aboutMe}</span> : ''}
                        <span><b>Job description: </b>{profile.lookingForAJobDescription}</span>
                        {profile.lookingForAJob ? <span><b>Looking for a job! </b></span> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;