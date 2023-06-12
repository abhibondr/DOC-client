import { API, endpoints } from "../api";

const QueryService = {
  createUser(user) {
    return API.post(endpoints?.api?.query?.create, user);
  },

  updateUser(id, user) {
    return API.put(endpoints?.api?.query?.update + id, user);
  },

  deleteUser(id) {
    return API.delete(endpoints?.api?.query?.delete + id);
  },

  getOneUser(id) {
    return API.get(endpoints?.api?.query?.getOne + id);
  },

  getAllUsers() {
    return API.get(endpoints?.api?.query?.getAll);
  },
};

export default QueryService;
