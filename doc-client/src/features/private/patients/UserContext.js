import { createContext } from "react";

const UserContext = createContext({
  open: false,
  operation: "add",
  handleClose: () => {},
  LoadUser: () => {},
  initialUser: {
    name: {
      first: "",
      last: "",
    },
    mobile: "",
    email: "",
    role: "",
  },
});

export default UserContext;
