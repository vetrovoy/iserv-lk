import React, { FC, useState } from "react";
import styled, { CSSObject } from "styled-components";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { IInput, Input } from "../../ui/form/Input";

interface IInputPassword extends IInput {}

const InputPasswordComponent = styled.div`
  position: relative;
`;

const EyeIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 14px;
`;

export const InputPassword: FC<IInputPassword> = ({
  style = {},
  ...props
}: IInput) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    <InputPasswordComponent style={style}>
      <Input
        name="password"
        type={isShowPassword ? "text" : "password"}
        {...props}
      />

      <EyeIcon onClick={handleShowPassword}>
        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
      </EyeIcon>
    </InputPasswordComponent>
  );
};
