import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6e9f6e8d-94af-4a20-90fc-05a92116676c"
    }
});

export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    getProfile(userId) {
        console.warn('Obsolute method. Please profileAPI object.')
        return profileApi.getProfile(userId)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile) {
        const formData = new FormData ();
        formData.append ("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false, captcha= null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout(email, password, rememberMe) {
        return instance.delete(`auth/login`, {email, password, rememberMe});
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}