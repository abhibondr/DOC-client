import { API, endpoints } from "../api";

const FeedbackService = {
  createUser(user) {
    return API.post(endpoints?.api?.feedback?.create, user);
  },

  updateUser(id, user) {
    return API.put(endpoints?.api?.feedback?.update + id, user);
  },

  deleteUser(id) {
    return API.delete(endpoints?.api?.feedback?.delete + id);
  },

  getOneUser(id) {
    return API.get(endpoints?.api?.feedback?.getOne + id);
  },

  getAllUsers() {
    return API.get(endpoints?.api?.feedback?.getAll);
  },
};

export default FeedbackService;
