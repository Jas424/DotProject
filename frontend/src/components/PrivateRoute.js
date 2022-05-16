// the purpose of this component is to prevent the dashboard from trying to be rendered if there is no user currently logged in

import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import React from "react";
// import SignupPageLoader from "./PageLoaders/SignupPageLoader";

const PrivateRoute = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  // return !currentUser ? <Outlet /> : <SignupPageLoader />;
  return !currentUser ? <Outlet /> : navigate("/signup");
};

export default PrivateRoute;
