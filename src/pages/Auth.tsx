import { Navigate } from "react-router-dom";

import { AuthForm } from "../modules/auth/AuthForm";

import { routeNames } from "../routes/routes";

export const Auth = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to={routeNames.SUBSCRS} replace />;
  } else {
    return <AuthForm />;
  }
};
