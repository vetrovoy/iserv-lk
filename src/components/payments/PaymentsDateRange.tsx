import { ChangeEvent } from "react";
import styled from "styled-components";

import {
  useTypedDispatch,
  useTypedSelector,
} from "../../hooks/useTypedSelector";

import { Input } from "../../ui/form/Input";
import { paymentsPeriodActions } from "../../store/user/payments-period";

const DateInputsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;

export const StyledDateInputs = () => {
  const dispatch = useTypedDispatch();
  const period = useTypedSelector((state) => state.paymentsPeriod.period);

  const handleBeginDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(paymentsPeriodActions.setBegin(event.target.value));
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(paymentsPeriodActions.setEnd(event.target.value));
  };

  return (
    <>
      <DateInputsContainer>
        <Input
          onChange={handleBeginDateChange}
          value={period.begin}
          type="date"
          name="begin"
        />
        <Input
          onChange={handleEndDateChange}
          value={period.end}
          type="date"
          name="end"
        />
      </DateInputsContainer>
    </>
  );
};
