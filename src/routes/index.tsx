import { FC } from "react";
import ForgotPassword from "./Authentication/ForgotPassword";
import { Route, Routes as Switch } from "react-router-dom";
import { routes } from "../utils/constants/routes";
import Login from "./Authentication/Login";




const Routes: FC = () => {
  return (
    <>
    {/* <Login/> */}
    {/* <ForgotPassword/> */}
    <Switch>

        <Route path={routes.login} element={<Login />} />
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
    </Switch>
    </>
  );
};

export default Routes;
