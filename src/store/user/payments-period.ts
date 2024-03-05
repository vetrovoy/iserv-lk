import { createSlice } from "@reduxjs/toolkit";

import { helpers } from "../../helpers/helpers";

import userReducers from "./payments-period-reducers";

export type TPeriod = {
  begin: string;
  end: string;
};

export interface IInitialPeriodState {
  period: TPeriod;
}

const lastSixMonths = helpers.getLastSixMonths();

const initialState: IInitialPeriodState = {
  period: {
    begin: lastSixMonths[0],
    end: lastSixMonths[5],
  },
};

const paymentsPeriod = createSlice({
  name: "paymentsPeriod",
  initialState,
  reducers: {
    ...userReducers,
  },
});

export const paymentsPeriodActions = paymentsPeriod.actions;
export const paymentsPeriodReducer = paymentsPeriod.reducer;
