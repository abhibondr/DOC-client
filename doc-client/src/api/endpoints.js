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
      doctorLogin: "/auth/doctorLogin",
      validateToken: "/auth/validate-token",
      resetPassword: "/auth/reset-password",
    },
    admin: {
      getAllDoctors: "/admin/getAllDoctors",
    },
    query: {
      create: "/query",
      update: "/query/",
      delete: "/query/",
      getOne: "/query/",
      getAll: "/query",
    },
    feedback: {
      create: "/feedback",
      update: "/feedback/",
      delete: "/feedback/",
      getOne: "/feedback/",
      getAll: "/feedback",
    },
  },
};
