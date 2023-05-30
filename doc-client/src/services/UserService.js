import { API, endpoints } from "../api";

const UserService = {
  createUser(user) {
    return API.post(endpoints?.api?.users?.create, user);
  },

  updateUser(id, user) {
    return API.put(endpoints?.api?.users?.update + id, user);
  },

  deleteUser(id) {
    return API.delete(endpoints?.api?.users?.delete + id);
  },

  getOneUser(id) {
    return API.get(endpoints?.api?.users?.getOne + id);
  },

  getAllUsers(query) {
    return API.get(endpoints?.api?.users?.getAll + query);
  },
};

export default UserService;
