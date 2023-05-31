import { API, endpoints } from "../api";

const AuthService = {
  userLogin(user) {
    return API.post(endpoints?.api?.auth?.userLogin, user);
  },

  validateToken() {
    const token = sessionStorage.getItem("token");
    if (token) return API.post(endpoints?.api?.auth?.validateToken, { token });
    else return Promise.reject("Token not available");
  },
};
export default AuthService;
