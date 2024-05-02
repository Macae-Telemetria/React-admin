import MainLayout from "@ui/shared/layouts/main";
import React, { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { PAGES_MANIFEST } from "./pages";
import { useAuthentication } from "./contexts/Authentication";

export const RedirectGuard: React.FunctionComponent = () => {
  const location = useLocation();
  useEffect(() => {
    const url = `/login?redirect=${location.pathname}${location.search}`
    window.location.replace(url);
  }, [location]);

  return <> Redirecionando... </>;
};

const Router = (props) => {

  const { user } = useAuthentication()
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!!user && (
            <Route
              element={
                <MainLayout>
                  <Outlet />
                </MainLayout>
              }
            >
              <Route path={PAGES_MANIFEST.Dashboard.path}>
                <Route index element={<PAGES_MANIFEST.Dashboard.Element />} />
              </Route>

              <Route path={PAGES_MANIFEST.Ota.path}>
                <Route index element={<PAGES_MANIFEST.Ota.Element />} />
              </Route>

              <Route path={PAGES_MANIFEST.OtaCreateRelease.path}>
                <Route index element={<PAGES_MANIFEST.OtaCreateRelease.Element />} />
              </Route>


              <Route
                path="/*"
                element={
                  <Navigate replace to={PAGES_MANIFEST.Dashboard.path} />
                }
              />
            </Route>
          )}

          <Route path={PAGES_MANIFEST.Login.path}>
            <Route index element={<PAGES_MANIFEST.Login.Element />} />
          </Route>

          <Route path="/*" element={<RedirectGuard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
