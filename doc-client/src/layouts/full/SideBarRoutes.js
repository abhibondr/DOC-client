import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import adminRoutes from "../../shared/routes/adminRoutes";
import { useSelector } from "react-redux";
import { selectAuth } from "../../app/slice/AuthSlice";

const SideBarRoutes = () => {
  const loggedUser = useSelector(selectAuth);

  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          {Array.isArray(adminRoutes) &&
            adminRoutes
              ?.filter(({ roles }) =>
                roles?.includes(loggedUser?.role ? loggedUser?.role : "admin")
              )
              .map(({ path, component, hasChildren }, i) => (
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
