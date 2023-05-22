import React from "react";
import { API, endpoints } from "../api";

const UserService = () => {
  const createUser = (user) => {
    return API.post(endpoints?.api?.users?.create, user);
  };

  const updateUser = (id, user) => {
    return API.put(endpoints?.api?.users?.update + id, user);
  };

  const deleteUser = (id) => {
    return API.delete(endpoints?.api?.users?.delete + id);
  };

  const getOneUser = (id) => {
    return API.get(endpoints?.api?.users?.getOne + id);
  };

  const getAllUsers = (query) => {
    return API.get(endpoints?.api?.users?.getAll + query);
  };
};

export default UserService;
