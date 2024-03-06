import { FC, FormHTMLAttributes, SyntheticEvent } from "react";
import styled from "styled-components";

import { Paragraph } from "../typography/Paragraph";
import { Spinner } from "../loaders/Spinner";

import { TFieldStatus } from "./types/types";

import { STATUS_STYLES } from "./helpers/constants";

const FormComponent = styled.form<{ status: TFieldStatus }>`
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: #ecf2f8;
  border: 1px solid ${(props) => STATUS_STYLES[props.status]};
  filter: ${(props) => (props.status === "loading" ? "blur(2px)" : "none")};
`;

const FormParagraph = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  zindex: 100;
`;

const FormSpinner = styled.div`
  position: absolute;
  zindex: 100;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const FormWrapper = styled.div`
  position: relative;
`;

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  msg?: string;
  status: TFieldStatus;
  onFormSubmit?: () => void;
}

export const Form: FC<IForm> = ({
  children,
  msg = "",
  status = "idle",
  onFormSubmit = () => {},
  ...props
}: IForm) => {
  const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    onFormSubmit();
  };
  return (
    <FormWrapper>
      <FormComponent status={status} onSubmit={onSubmit} {...props}>
        {children}
      </FormComponent>
      <FormParagraph>
        <Paragraph>{msg}</Paragraph>
      </FormParagraph>
      {status === "loading" && (
        <FormSpinner>
          <Spinner />
        </FormSpinner>
      )}
    </FormWrapper>
  );
};
