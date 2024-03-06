import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { routeNames } from "./routes";

export const ProtectedRoute = ({
  token,
  children,
}: {
  token?: string | undefined | null;
  children: ReactNode;
}) => {
  if (!token) {
    return <Navigate to={routeNames.AUTH} replace />;
  }

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to={routeNames.ERROR} replace />;
};
