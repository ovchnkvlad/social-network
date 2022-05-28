import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = " SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likeCount: 12, createdAt: '10.11.2021'},
        {id: 2, message: 'It\'s my first post', likeCount: 40, createdAt: '07.11.2021'},
        {id: 3, message: 'I love you Web Storm', likeCount: 0, createdAt: '05.10.2021'},
        {id: 4, message: 'Something else', likeCount: 11, createdAt: '03.10.2021'},
    ],
    profile: null,
    status: ''
};
const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            let currentTime = new Date();
            let currentDateFormat = `${currentTime.getDate()}.${currentTime.getMonth()}.${currentTime.getFullYear()}`;
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
                createdAt: currentDateFormat
            };

            return {
                ...stateCopy,
                posts: [newPost, ...stateCopy.posts]
            }
        case SET_STATUS:
            return {
                ...stateCopy,
                status: action.status
            }

        case SET_USER_PROFILE:
            return {...stateCopy, profile: action.profile};
        default:
            return stateCopy;
    }
}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setUserStatus(data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(data));
        }
    })
}

export default profileReducer;