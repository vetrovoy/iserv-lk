import { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  padding: 14px 20px;
  background: linear-gradient(269deg, #479aff 0%, #1dda9b 100%);
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
