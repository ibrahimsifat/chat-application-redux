import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = UseAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
