import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

type TTitle = {
  children: ReactNode;
  style?: CSSProperties;
};

const TitleComponent = styled.div`
  color: #1a1f25;
  font-size: 33px;
  font-weight: 700;
  line-height: 120%;
`;

export const Title: FC<TTitle> = ({ style, children }: TTitle) => {
  return <TitleComponent style={style}>{children}</TitleComponent>;
};
