import { FC } from "react";
import ForgotPassword from "../components/ForgotPassword";
import { Route, Routes as Switch } from "react-router-dom";
import { routes } from "../utils/constants/routes";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard/Dashboard";





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
