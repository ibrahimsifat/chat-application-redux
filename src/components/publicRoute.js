import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isLoggedIn = UseAuth();
  return !isLoggedIn ? children : <Navigate to="/inbox" />;
};

export default PublicRoute;
