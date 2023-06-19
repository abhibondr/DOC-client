import { API, endpoints } from "../api";

const AuthService = {
  userLogin(user) {
    return API.post(endpoints?.api?.auth?.userLogin, user);
  },

  doctorLogin(user) {
    return API.post(endpoints?.api?.auth?.doctorLogin, user);
  },

  validateToken() {
    const token = sessionStorage.getItem("token");

    if (token) return API.post(endpoints?.api?.auth?.validateToken, { token });
    else return Promise.reject("Token not available");
  },

  resetPassword(email) {
    return API.post(endpoints?.api?.auth?.resetPassword, { email });
  },
};
export default AuthService;
