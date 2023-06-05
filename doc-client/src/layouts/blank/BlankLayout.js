import React, { Suspense } from "react";

import frontendRoutes from "../../shared/routes/frontendRoutes";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "./Header";
import Allergists from "../../features/home/home-links/Allergists";
import Anesthesiologists from "../../features/home/home-links/Anesthesiologists";
import Cardiologists from "../../features/home/home-links/Cardiologists";
import NeurologicalSurgeon from "../../features/home/home-links/PlasticSurgeons";
import Dermatologist from "../../features/home/home-links/Dermatologist";
import EmergencyMedicine from "../../features/home/home-links/EmergencyMedicine";
import Footer from "../../features/footer/Footer";

const BlankLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          {Array.isArray(frontendRoutes) &&
            frontendRoutes?.map(({ path, component, hasChildren }, i) => (
              <Route
                key={path + i}
                path={hasChildren ? `${path}/*` : path}
                element={component}
              />
            ))}
        </Routes>
        <Routes>
          <Route path="/Allergists/Immunologists" element={<Allergists />} />
          <Route path="/Anesthesiologists" element={<Anesthesiologists />} />
          <Route path="/Cardiologists" element={<Cardiologists />} />
          <Route
            path="/NeurologicalSurgeon"
            element={<NeurologicalSurgeon />}
          />
          <Route path="/Dermatologist" element={<Dermatologist />} />
          <Route path="/Emergency Medicine" element={<EmergencyMedicine />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default BlankLayout;
