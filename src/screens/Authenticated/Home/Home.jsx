import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';
import { selectUser } from '../../../utils/redux/reducer/authentication-slice';

const Home = () => {
  const isLogin = useSelector(selectUser);
  return isLogin ? <Navigate to={routes.dashboard} />: <Navigate to={routes.login} />;
}

export default Home