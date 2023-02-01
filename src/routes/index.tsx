import { FC } from "react";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import { Route, Routes as Switch } from "react-router-dom";
import { routes } from "../utils/constants/routes";
import Login from "../screens/Authentication/Login";
import Dashboard from "../screens/Authenticated/Dashboard/Dashboard";





const Routes: FC = () => {
  return (
    <>
    {/* <Login/> */}
    {/* <ForgotPassword/> */}
    <Switch>
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.dashboard} element={<Dashboard />} />
    </Switch>
    </>
  );
};

export default Routes;
