import { FC } from "react";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import {  Route, Routes as Switch } from "react-router-dom";
import { routes } from "../utils/constants/routes";
import Login from "../screens/Authentication/Login";
import Dashboard from "../screens/Authenticated/Dashboard/Dashboard";
import Home from "../screens/Authenticated/Home/Home";
import Profile from "../screens/Authenticated/Profile/Profile";
import ChangePassword from "../screens/Authenticated/ChangePassword/ChangePassword";
import HomeScreen from "../screens/Authenticated/Home/HomeScreen";

const Routes: FC = () => {

  return (
    <>
    <Switch>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.root} element={<Home/>} />
        <Route path={routes.dashboard} element={<HomeScreen Component={Dashboard}/>} />
        <Route path={routes.changepassword} element={<HomeScreen Component={ChangePassword}/>} />
        <Route path={routes.profile} element={<HomeScreen Component={Profile}/>} />
  </Switch>
    </>
  );
};

export default Routes;
