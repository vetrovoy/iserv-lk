import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  token,
  children,
}: {
  token?: string | undefined | null;
  children: ReactNode;
}) => {
  if (!token) {
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
};
