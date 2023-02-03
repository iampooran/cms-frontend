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
//import AddUser from "../screens/Authenticated/AddUser/AddUser";
import UserList from "../screens/Authenticated/UserList/UserList";
import Demo from "../screens/Authenticated/Demo/Demo";
import AddUser from "../screens/Authenticated/AddUser/AddUser";

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
     
        <Route path={routes.userlist} element={<HomeScreen Component={UserList}/>} />
        <Route path={routes.adduser} element = {<HomeScreen Component={AddUser}/>}/>
  
        {/* Dummy page just for experiments
        <Route path={'/Demo'} element={<HomeScreen Component={Demo}/>} /> */}
  </Switch>
    </>
  );
};

export default Routes;
