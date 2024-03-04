import { PayloadAction } from "@reduxjs/toolkit";

import { TUser } from "../../api/types";

import { IInitialUserState } from "./user";

const userReducers = {
  setUser: (
    state: IInitialUserState,
    action: PayloadAction<TUser["Username"] | null>,
  ) => {
    state.user = action.payload;
  },
  setToken: (
    state: IInitialUserState,
    action: PayloadAction<TUser["ExtToken"] | null>,
  ) => {
    state.token = action.payload;
  },
};

export default userReducers;
