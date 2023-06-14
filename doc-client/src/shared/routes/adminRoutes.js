import React, { lazy } from "react";

import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AccessibleIcon from "@mui/icons-material/Accessible";
import EnquiryIcon from "@mui/icons-material/EnergySavingsLeaf";

import ApplyDoctorIcon from "@mui/icons-material/PersonAddAlt1";
// import BookAppointment from "../../features/private/book-appointment/BookAppointment";
const Appointments = lazy(() =>
  import("../../features/private/appointments/Appointments")
);
const Doctors = lazy(() => import("../../features/private/doctors/Doctors"));
const Patients = lazy(() => import("../../features/private/patients/Patients"));
const Enquiry = lazy(() => import("../../features/private/enquiry/Enquiry"));
const ApplyDoctor = lazy(() =>
  import("../../features/private/apply-doctor/ApplyDoctor")
);

const BookAppointment = lazy(() =>
  import("../../features/private/book-appointment/BookAppointment")
);
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
    label: "Apply-Doctor",
    component: <ApplyDoctor />,
    icon: <ApplyDoctorIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "apply-doctor",
  },

  {
    label: "Patients",
    component: <Patients />,
    icon: <AccessibleIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "patients",
  },
  {
    label: "Enquiry",
    component: <Enquiry />,
    icon: <EnquiryIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "enquiry",
  },
  {
    component: <BookAppointment />,
    showInMenu: true,
    hasChildren: false,
    path: "doctors/bookAppointment/:id",
  },
];
