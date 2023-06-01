/* eslint-disable import/no-anonymous-default-export */
import React, { lazy } from "react";

import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AccessibleIcon from "@mui/icons-material/Accessible";
const Appointments = lazy(() =>
  import("../../features/private/appointments/Appointments")
);
const Doctors = lazy(() => import("../../features/private/doctors/Doctors"));
const Patients = lazy(() => import("../../features/private/patients/Patients"));

export default [
  {
    label: "Appointments",
    component: <Appointments />,
    icon: <MedicalInformationIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "",
  },
  {
    label: "Doctors",
    component: <Doctors />,
    icon: <MedicationLiquidIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "doctors",
  },

  {
    label: "Patients",
    component: <Patients />,
    icon: <AccessibleIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "patients",
  },
];