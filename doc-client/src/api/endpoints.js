export default {
  serverBaseURL: "http://localhost:6666/api",
  api: {
    users: {
      create: "/users",
      update: "/users/",
      delete: "/users/",
      getOne: "/users/",
      getAll: "/users",
    },
    auth: {
      userLogin: "/auth/login",
    },
  },
};
