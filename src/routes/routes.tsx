import { Navigate } from "react-router-dom";

import { Auth } from "../pages/Auth";
import { Payments } from "../pages/Payments";
import { Charges } from "../pages/Charges";
import { Subscrs } from "../pages/Subscrs";
import { Error } from "../pages/Error";

export enum routeNames {
  ERROR = "/404",
  AUTH = "/",
  PAYMENTS = "/payments/",
  CHARGES = "/charges",
  SUBSCRS = "/subscrs",
}

export interface IRoute {
  path: string;
  element: React.ReactNode;
  isProtected?: boolean;
}

export const protectedRoutes: IRoute[] = [
  {
    path: routeNames.CHARGES,
    element: <Charges />,
    isProtected: true,
  },
  {
    path: routeNames.PAYMENTS + ":slug",
    element: <Payments />,
    isProtected: true,
  },
  {
    path: routeNames.SUBSCRS,
    element: <Subscrs />,
    isProtected: true,
  },
];

export const routes: IRoute[] = [
  {
    path: "*",
    element: <Navigate to={routeNames.ERROR} />,
    isProtected: false,
  },
  {
    path: routeNames.ERROR,
    element: <Error />,
    isProtected: false,
  },
  {
    path: routeNames.AUTH,
    element: <Auth />,
    isProtected: false,
  },
  ...protectedRoutes,
];
