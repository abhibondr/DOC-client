import React, { lazy } from "react";

import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Password";

const HomePage = lazy(() => import("../../features/home/HomePage"));
const LoginPage = lazy(() => import("../../features/login/LoginPage"));

export default [
  {
    label: "Home",
    component: <HomePage />,
    icon: <HomeIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "",
  },
  {
    label: "Login",
    component: <LoginPage />,
    icon: <LoginIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "login",
  },
];
