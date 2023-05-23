import React, { lazy } from "react";

import HomeIcon from "@mui/icons-material/Home";
const HomePage = lazy(() => import("../../features/home/HomePage"));

export default [
  {
    label: "Home",
    component: <HomePage />,
    icon: <HomeIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "/home",
  },
];
