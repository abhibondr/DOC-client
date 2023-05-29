import { API, endpoints } from "../api";

const AuthService = () => {
  const userLogin = (user) => {
    return API.post(endpoints?.api?.auth?.userLogin, user);
  };
};

export default AuthService;
