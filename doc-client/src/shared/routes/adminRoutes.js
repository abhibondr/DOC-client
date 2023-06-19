import React, { lazy } from "react";

import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AccessibleIcon from "@mui/icons-material/Accessible";
import EnquiryIcon from "@mui/icons-material/EnergySavingsLeaf";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ApplyDoctorIcon from "@mui/icons-material/PersonAddAlt1";
import BookAppointmentByAdmin from "../../features/private/manage appointment/ReceptionList";
import BookIcon from "@mui/icons-material/NoteAdd";
const DoctorAppointments = lazy(() =>
  import("../../features/private/doctor-appointment/DoctorAppointments")
);
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
    roles: ["admin", "patient"],
  },
  {
    label: "Doctors",
    component: <Doctors />,
    icon: <MedicationLiquidIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "doctors",
    roles: ["admin", "patient"],
  },

  {
    label: "Apply-Doctor",
    component: <ApplyDoctor />,
    icon: <ApplyDoctorIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "apply-doctor",
    roles: ["admin"],
  },

  {
    label: "Patients",
    component: <Patients />,
    icon: <AccessibleIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "patients",
    roles: ["admin"],
  },
  {
    label: "Enquiry",
    component: <Enquiry />,
    icon: <EnquiryIcon />,
    showInMenu: true,
    hasChildren: false,
    path: "enquiry",
    roles: ["admin"],
  },
  {
    label: "Doctor Appointment",
    icon: <ManageAccountsIcon />,
    component: <DoctorAppointments />,
    showInMenu: true,
    hasChildren: false,
    path: "doctor-appointments",
    roles: ["admin"],
  },
  {
    label: "bookappointment-patient",
    icon: <BookIcon />,
    component: <BookAppointmentByAdmin />,
    showInMenu: true,
    hasChildren: false,
    path: "doctors/bookappointment-patient",
    roles: ["admin"],
  },

  {
    component: <BookAppointment />,
    showInMenu: false,
    hasChildren: false,
    path: "doctors/bookAppointment/:id",
    roles: ["admin", "patient"],
  },
];
