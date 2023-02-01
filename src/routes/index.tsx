import { FC } from "react";
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import { Navigate, Route, Routes as Switch, useLocation } from "react-router-dom";
import { routes } from "../utils/constants/routes";
import Login from "../screens/Authentication/Login";
import Dashboard from "../screens/Authenticated/Dashboard/Dashboard";
import Home from "../screens/Authenticated/Home/Home";
import Profile from "../screens/Authenticated/Profile/Profile";
import ChangePassword from "../screens/Authenticated/ChangePassword/ChangePassword";
import { useSelector } from "react-redux";
import { selectUser } from "../utils/redux/reducer/authentication-slice";

// const Home: FC = () => {
//   let location = useLocation();

  
//   console.log(isLogin)
//   const { from } = location.state || { from: { pathname: routes.dashboard } };
//   return isLogin ? <Navigate to={routes.root} /> : <Navigate to={routes.login} />;
// };




const Routes: FC = () => {
  const isLogin = useSelector(selectUser);

  console.log(isLogin)

  return (
    <>
    <Switch>
        <Route path={routes.root} element={<Home />} />
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.changepassword} element={<ChangePassword />} />
    </Switch>
    </>
  );
};

export default Routes;
