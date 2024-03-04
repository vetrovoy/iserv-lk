import styled from "styled-components";

import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Wrapper = styled.div`
  padding-inline: 10px;
  max-width: 1920px;
  min-width: 320px;
`;

export const Container = ({ children }: TContainer) => {
  return <Wrapper>{children}</Wrapper>;
};
