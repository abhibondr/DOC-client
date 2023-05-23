import React, { lazy } from "react";

import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Password";
import ContactIcon from "@mui/icons-material/Contact";
import ServicesIcon from "@mui/icons-material/Services";

const HomePage = lazy(() => import("../../features/home/HomePage"));
const LoginPage = lazy(() => import("../../features/login/LoginPage"));
const ContactPage = lazy(() => import("../../features/contact/ContactPage"));
const ServicesPage = lazy(() => import("../../features/services/ServicesPage"));
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
  {
    label: "Contact",
    component: <ContactPage />,
    icon: <ContactIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "contact",
  },
  {
    label: "Services",
    component: <ServicesPage />,
    icon: <ServicesIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "services",
  },
];
