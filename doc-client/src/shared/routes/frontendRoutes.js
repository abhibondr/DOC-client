/* eslint-disable import/no-anonymous-default-export */
import React, { lazy } from "react";

import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Password";
import SignUpIcon from "@mui/icons-material/SignLanguage";
import ContactIcon from "@mui/icons-material/ContactPage";
import AboutIcon from "@mui/icons-material/MedicalInformation";
import ServicesIcon from "@mui/icons-material/MedicalServices";
import TestimonialIcon from "@mui/icons-material/Comment";
import Footer from "../../features/footer/Footer";

const HomePage = lazy(() => import("../../features/home/HomePage"));
const AboutPage = lazy(() => import("../../features/about/AboutPage"));
const ServicesPage = lazy(() => import("../../features/services/ServicesPage"));
const TestimonialPage = lazy(() =>
  import("../../features/testimonial/TestimonialPage")
);
const ContactPage = lazy(() => import("../../features/contact/ContactPage"));
const LoginPage = lazy(() => import("../../features/login/LoginPage"));
const SignUp = lazy(() => import("../../layouts/blank/SignUp"));

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
    label: "About",
    component: <AboutPage />,
    icon: <AboutIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "about",
  },

  {
    label: "Services",
    component: <ServicesPage />,
    icon: <ServicesIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "services",
  },
  {
    label: "Testimonial",
    component: <TestimonialPage />,
    icon: <TestimonialIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "testimonial",
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
    label: "Login",
    component: <LoginPage />,
    icon: <LoginIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "login",
  },
  {
    label: "SignUp",
    component: <SignUp />,
    icon: <SignUpIcon />,
    showInMenu: false,
    hasChildren: false,
    path: "signup",
  },
  {
    label: "Footer",
    component: <Footer />,

    showInMenu: false,
    hasChildren: false,
    path: "Footer",
  },
];
