import { PayloadAction } from "@reduxjs/toolkit";

import { TPeriod, IInitialPeriodState } from "./payments-period";

const periodReducers = {
  setBegin: (
    state: IInitialPeriodState,
    action: PayloadAction<TPeriod["begin"]>,
  ) => {
    state.period.begin = action.payload;
  },
  setEnd: (
    state: IInitialPeriodState,
    action: PayloadAction<TPeriod["end"]>,
  ) => {
    state.period.end = action.payload;
  },
};

export default periodReducers;
