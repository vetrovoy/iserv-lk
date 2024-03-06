import { PayloadAction } from "@reduxjs/toolkit";

import { TPeriod, IInitialPeriodState } from "./period";

const periodReducers = {
  setPaymentsBegin: (
    state: IInitialPeriodState,
    action: PayloadAction<TPeriod["begin"]>,
  ) => {
    state.paymentsPeriod.begin = action.payload;
  },
  setPaymentsEnd: (
    state: IInitialPeriodState,
    action: PayloadAction<TPeriod["end"]>,
  ) => {
    state.paymentsPeriod.end = action.payload;
  },
  setChargesBegin: (
    state: IInitialPeriodState,
    action: PayloadAction<TPeriod["begin"]>,
  ) => {
    state.chargesPeriod.begin = action.payload;
  },
  setChargesEnd: (
    state: IInitialPeriodState,
    action: PayloadAction<TPeriod["end"]>,
  ) => {
    state.chargesPeriod.end = action.payload;
  },
};

export default periodReducers;
