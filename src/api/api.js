import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "105a2df2-86d0-4999-bcba-5e168d35c0d2"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&pcount=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data;
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}