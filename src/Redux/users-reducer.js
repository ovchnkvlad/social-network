import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW-USER';
const UNFOLLOW = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress:  []
}

const usersReducers = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}

        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUserTotalCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setToggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setToggleFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setUserTotalCount(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(setToggleFetching(false));
    })
}

export const follow = (userId) => (dispatch) => {
    dispatch(setToggleFollowingProgress(true, userId));
    userAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(setToggleFollowingProgress(false, userId));
    })
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(setToggleFollowingProgress(true, userId));
    userAPI.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(setToggleFollowingProgress(false, userId));
    })
}

export default usersReducers