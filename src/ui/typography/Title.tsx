import { FC, ReactNode } from "react";
import styled, { CSSProp } from "styled-components";

type TTitle = {
  children: ReactNode;
  marginbottom?: CSSProp;
};

const TitleComponent = styled.div<{
  marginbottom?: CSSProp;
}>`
  color: #1a1f25;
  font-size: 33px;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: ${(props) => (props?.marginbottom ? props.marginbottom : "0")};
`;

export const Title: FC<TTitle> = ({ children, ...props }: TTitle) => {
  return <TitleComponent {...props}>{children}</TitleComponent>;
};
