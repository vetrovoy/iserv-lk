import { createSlice } from "@reduxjs/toolkit";

import { TUser } from "../../api/types";

import userReducers from "./user-reducers";

export interface IInitialUserState {
  user: TUser["Username"] | undefined | null;
  token: TUser["ExtToken"] | undefined | null;
}

const initialState: IInitialUserState = {
  user: undefined,
  token: undefined,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...userReducers,
  },
});

export const userActions = user.actions;
export const userReducer = user.reducer;
