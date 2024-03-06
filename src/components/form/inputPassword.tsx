import { FC, useState } from "react";
import styled from "styled-components";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { IInput, Input } from "../../ui/form/Input";

const EyeIcon = styled.div`
  cursor: pointer;
`;

export const InputPassword: FC<IInput> = ({ ...props }: IInput) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Input
        icon={
          <EyeIcon onClick={handleShowPassword}>
            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
          </EyeIcon>
        }
        name="password"
        type={isShowPassword ? "text" : "password"}
        {...props}
      />
    </>
  );
};
