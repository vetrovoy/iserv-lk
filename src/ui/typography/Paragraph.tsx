import { CSSProperties, FC, ReactNode } from "react";
import styled from "styled-components";

type TParagraph = {
  children: ReactNode;
  style?: CSSProperties;
};

const ParagraphComponent = styled.p`
  color: #6f7882;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;

export const Paragraph: FC<TParagraph> = ({
  children,
  style = {},
}: TParagraph) => {
  return <ParagraphComponent style={style}>{children}</ParagraphComponent>;
};
