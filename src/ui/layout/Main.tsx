import styled from "styled-components";

import { ReactNode } from "react";

type TMain = {
  children: ReactNode;
};

const Wrapper = styled.main`
  background: #fff;
  margin: 75px 0;
`;

export const Main = ({ children }: TMain) => {
  return <Wrapper>{children}</Wrapper>;
};
