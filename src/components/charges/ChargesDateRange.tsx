import { ChangeEvent } from "react";

import {
  useTypedDispatch,
  useTypedSelector,
} from "../../hooks/useTypedSelector";

import { periodActions } from "../../store/period/period";
import InputDateRange from "../form/inputDateRange";
import { formatters } from "../../helpers/formatters";

export const ChargesDateRange = () => {
  const dispatch = useTypedDispatch();
  const period = useTypedSelector((state) => state.period.chargesPeriod);

  const handleBeginDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const period = formatters.ISOToPeriod(event.target.value);
    dispatch(periodActions.setChargesBegin(period));
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const period = formatters.ISOToPeriod(event.target.value);
    dispatch(periodActions.setChargesEnd(period));
  };

  return (
    <>
      <InputDateRange
        valueEnd={formatters.periodToISO(period.end)}
        valueBegin={formatters.periodToISO(period.begin)}
        handleEndDateChange={handleEndDateChange}
        handleBeginDateChange={handleBeginDateChange}
      />
    </>
  );
};
