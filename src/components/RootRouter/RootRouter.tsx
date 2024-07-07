import React from "react";
import { Route, Routes } from "react-router-dom";
import * as RouterConfig from "../../util/routes";
import GuestWrapper from "../GuestWrapper/GuestWrapper";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import AuthorizedWrapper from "../AuthorizedWrapper/AuthorizedWrapper";
import Home from "../../pages/Home/Home";
const RootRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path={RouterConfig.ROUTE_DEFAULT_PAGE}
        element={
          <GuestWrapper>
            <Home />
          </GuestWrapper>
        }
      />
      <Route
        path={RouterConfig.ROUTE_REGISTER_PAGE}
        element={
          <GuestWrapper>
            <Register />
          </GuestWrapper>
        }
      />
      <Route
        path={RouterConfig.ROUTE_LOGIN_PAGE}
        element={
          <GuestWrapper>
            <Login />
          </GuestWrapper>
        }
      />

      <Route
        path={RouterConfig.ROUTE_HOME_PAGE}
        element={
          <AuthorizedWrapper>
            <Home />
          </AuthorizedWrapper>
        }
      />
    </Routes>
  );
};

export default RootRouter;
