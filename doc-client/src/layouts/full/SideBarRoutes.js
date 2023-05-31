import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import adminRoutes from "../../shared/routes/adminRoutes";

const SideBarRoutes = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          {Array.isArray(adminRoutes) &&
            adminRoutes?.map(({ path, component, hasChildren }, i) => (
              <Route
                key={path + i}
                path={hasChildren ? `${path}/*` : path}
                element={component}
              />
            ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default SideBarRoutes;
