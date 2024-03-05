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
  exact?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "*",
    element: <Navigate to={routeNames.ERROR} />,
  },
  {
    path: routeNames.ERROR,
    element: <Error />,
  },
  {
    path: routeNames.CHARGES,
    element: <Charges />,
  },
  {
    path: routeNames.PAYMENTS + ":slug",
    element: <Payments />,
  },
  {
    path: routeNames.SUBSCRS,
    element: <Subscrs />,
  },
  {
    path: routeNames.AUTH,
    element: <Auth />,
  },
];
