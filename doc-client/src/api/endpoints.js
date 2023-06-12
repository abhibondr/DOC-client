export default {
  serverBaseURL: "http://localhost:9999",
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
      validateToken: "/auth/validate-token",
      resetPassword: "/auth/reset-password",
    },
    query: {
      create: "/query",
      update: "/query/",
      delete: "/query/",
      getOne: "/query/",
      getAll: "/query",
    },
  },
};
