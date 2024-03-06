import { ChangeEvent } from "react";

import styled from "styled-components";

import { Input } from "../../ui/form/Input";

const DateInputsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

type TInputDateRange = {
  valueBegin: string;
  valueEnd: string;
  handleEndDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBeginDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputDateRange({
  valueBegin,
  valueEnd,
  handleEndDateChange,
  handleBeginDateChange,
}: TInputDateRange) {
  return (
    <DateInputsContainer>
      <Input
        onChange={handleBeginDateChange}
        value={valueBegin}
        type="month"
        name="begin"
      />
      <Input
        onChange={handleEndDateChange}
        value={valueEnd}
        type="month"
        name="end"
      />
    </DateInputsContainer>
  );
}
