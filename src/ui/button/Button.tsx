import { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonComponent = styled.button<{ disabled: IButton["disabled"] }>`
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  padding: 14px 20px;
  background: linear-gradient(269deg, #479aff 0%, #1dda9b 100%);
  text-align: center;
  color: #fff;
  cursor: pointer;
  opacity: ${(props) => (props?.disabled ? "0.5" : "1")};

  &:hover {
    background: linear-gradient(269deg, #3b85e0 0%, #14b590 100%);
  }
`;

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = ({
  disabled,
  children,
  ...props
}: IButton) => {
  return (
    <ButtonComponent disabled={disabled} {...props}>
      {children}
    </ButtonComponent>
  );
};
