import { Navigate } from "react-router-dom";

import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Payments } from "../pages/Payments";
import { Charges } from "../pages/Charges";
import { Subscrs } from "../pages/Subscrs";
import { Error } from "../pages/Error";

export enum routeNames {
  ERROR = "/404",
  AUTH = "/",
  HOME = "/home",
  PAYMENTS = "/payments",
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
    path: routeNames.HOME,
    element: <Home />,
  },
  {
    path: routeNames.CHARGES,
    element: <Charges />,
  },
  {
    path: routeNames.PAYMENTS,
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
