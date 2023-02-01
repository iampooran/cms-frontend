import React from "react";
import './style.css'
import CircularProgress from '@mui/material/CircularProgress';
const PageLoader = () => (
  <div className="loader_wrapper">
    <div className="spinner-border text-primary" role="status" />
    <CircularProgress color="primary" />
  </div>
);

export default PageLoader;
