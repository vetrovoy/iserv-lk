import { createSlice } from "@reduxjs/toolkit";

import { helpers } from "../../helpers/helpers";

import userReducers from "./period-reducers";

export type TPeriod = {
  begin: string;
  end: string;
};

export interface IInitialPeriodState {
  paymentsPeriod: TPeriod;
  chargesPeriod: TPeriod;
}

const lastSixMonths = helpers.getLastSixMonths();

const initialState: IInitialPeriodState = {
  paymentsPeriod: {
    begin: lastSixMonths[0],
    end: lastSixMonths[5],
  },
  chargesPeriod: {
    begin: lastSixMonths[0],
    end: lastSixMonths[5],
  },
};

const period = createSlice({
  name: "period",
  initialState,
  reducers: {
    ...userReducers,
  },
});

export const periodActions = period.actions;
export const periodReducer = period.reducer;
