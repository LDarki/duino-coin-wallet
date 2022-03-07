import axios from "axios";

const API_URL = "https://server.duinocoin.com/";

class AuthService {
    login(username: string, password: string) {
        return axios
            .get(API_URL + `v2/auth/${username}?password=${window.btoa(unescape(encodeURIComponent(password)))}`)
            .then(response => {
                let jsonData = response.data;
                if (jsonData.success == true) {
                    let userJson = {
                        username: username,
                        email: jsonData.result[1],
                        authToken: jsonData.result[2]
                    }
                    localStorage.setItem("user", JSON.stringify(userJson));
                }
                return jsonData.success;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }

    checkToken() {
        let { username, authToken } = this.getCurrentUser();
        return axios.get(API_URL + `v2/auth/check/${username}?token=${authToken}`);
    }
}

export default new AuthService();