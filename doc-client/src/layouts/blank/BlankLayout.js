import React, { Suspense } from "react";

import frontendRoutes from "../../shared/routes/frontendRoutes";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "./Header";
import Allergists from "../../features/home/home-links/Allergists";
import Anesthesiologists from "../../features/home/home-links/Anesthesiologists";
import Cardiologists from "../../features/home/home-links/Cardiologists";
import Obstetricians from "../../features/home/home-links/Obstetricians";
import PlasticSurgeons from "../../features/home/home-links/PlasticSurgeons";
import Preventive from "../../features/home/home-links/Preventive";

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
            path="/Obstetricians and Gynecologists"
            element={<Obstetricians />}
          />
          <Route path="/Plastic Surgeons" element={<PlasticSurgeons />} />
          <Route
            path="/Preventive Medicine Specialists"
            element={<Preventive />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default BlankLayout;
