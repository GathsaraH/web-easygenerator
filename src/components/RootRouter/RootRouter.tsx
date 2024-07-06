import React from "react";
import { Route, Routes } from "react-router-dom";
import * as RouterConfig from "../../util/routes";
import GuestWrapper from "../GuestWrapper/GuestWrapper";
import Register from "../../pages/Register/Register";
const RootRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path={RouterConfig.ROUTE_DEFAULT_PAGE}
        element={
          <GuestWrapper>
            <Register />
          </GuestWrapper>
        }
      />
    </Routes>
  );
};

export default RootRouter;
