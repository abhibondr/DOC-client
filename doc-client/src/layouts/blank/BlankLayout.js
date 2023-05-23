import React, { Suspense } from "react";

import frontendRoutes from "../../shared/routes/frontendRoutes";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const BlankLayout = () => {
  return (
    <>
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
      </Suspense>
    </>
  );
};

export default BlankLayout;
