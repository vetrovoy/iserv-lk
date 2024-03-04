import { InputHTMLAttributes, ChangeEvent, useState, FC } from "react";

import styled from "styled-components";

import { STATUS_STYLES } from "./helpers/constants";

import { IFieldResult, TFieldStatus } from "./types/types";

const validateInput = (
  rules: (value: string) => boolean,
  value: string,
): TFieldStatus => {
  if (!value) return "idle";

  return rules(value) ? "success" : "error";
};

const InputComponent = styled.input<{ status: TFieldStatus }>`
  border: 1px solid ${(props) => STATUS_STYLES[props.status]};
  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  padding: 14px 20px;
  outline: none;
`;

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  rules?: (value: string) => boolean;
  onValueChange?: ({ name, value }: IFieldResult) => void;
}

export const Input: FC<IInput> = ({
  rules = () => true,
  onValueChange = () => {},
  type = "text",
  name = "",
  ...props
}: IInput) => {
  const [status, setStatus] = useState<TFieldStatus>("idle");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const status = validateInput(rules, value);
    setStatus(status);

    onValueChange({ name: name, value: value });
  };

  return (
    <InputComponent
      onChange={onInputChange}
      name={name}
      type={type}
      status={status}
      {...props}
    />
  );
};
