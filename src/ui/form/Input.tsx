import {
  InputHTMLAttributes,
  ChangeEvent,
  useState,
  FC,
  ReactNode,
} from "react";

import styled, { CSSProp } from "styled-components";

import { Paragraph } from "../typography/Paragraph";

import { STATUS_STYLES } from "./helpers/constants";

import { IFieldResult, TFieldStatus } from "./types/types";

const validateInput = (
  rules: (value: string) => boolean,
  value: string,
): TFieldStatus => {
  if (!value) return "idle";

  return rules(value) ? "success" : "error";
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const InputStyled = styled.input<{
  width?: CSSProp;
  marginbottom?: CSSProp;
  status: TFieldStatus;
}>`
  border: 1px solid ${(props) => STATUS_STYLES[props.status]};
  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  padding: 14px 20px;
  outline: none;
  margin-bottom: ${(props) => (props?.marginbottom ? props.marginbottom : "0")};
  width: ${(props) => (props?.width ? props?.width : "auto")};
`;

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  rules?: (value: string) => boolean;
  onValueChange?: ({ name, value }: IFieldResult) => void;
  marginbottom?: string;
  width?: string;
  label?: string;
  icon?: null | ReactNode;
}

export const Input: FC<IInput> = ({
  rules = () => true,
  onValueChange = () => {},
  type = "text",
  name = "",
  icon = null,
  label = "",
  ...props
}: IInput) => {
  const [status, setStatus] = useState<TFieldStatus>("idle");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const status = validateInput(rules, value);
    setStatus(status);

    onValueChange({ name: name, value: value, valid: status === "success" });
  };

  return (
    <>
      <Flex>
        {label && <Paragraph>{label}</Paragraph>}
        {icon && icon}
      </Flex>
      <InputStyled
        onChange={onInputChange}
        name={name}
        type={type}
        status={status}
        {...props}
      />
    </>
  );
};
