import { CSSProperties, FC, ReactNode } from "react";
import styled from "styled-components";

const sizes = {
  md: "13px",
  lg: "18px",
  xl: "23px",
};

const colors = {
  black: "#1a1f25",
  grey: "#6f7882",
  blue: "#479AFF",
};

type TParagraph = {
  children: ReactNode;
  style?: CSSProperties;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
};

const ParagraphComponent = styled.p<{
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
}>`
  color: ${(props) => (props.color ? colors[props.color] : colors.grey)};
  font-size: ${(props) => (props.size ? sizes[props.size] : sizes.md)};
  font-style: normal;
  font-weight: 400;
`;

export const Paragraph: FC<TParagraph> = ({
  children,
  style = {},
  size,
  color,
}: TParagraph) => {
  return (
    <ParagraphComponent color={color} size={size} style={style}>
      {children}
    </ParagraphComponent>
  );
};
