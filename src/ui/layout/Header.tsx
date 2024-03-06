import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Paragraph } from "../typography/Paragraph";
import { Button } from "../button/Button";

import { routeNames } from "../../routes/routes";

import { Container } from "./Container";

const Wrapper = styled.header`
  padding: 20px 0;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  background-color: #ecf2f8;
  margin-bottom: 20px;
  border-bottom: 1px solid #6f7882;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Header = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");

  const loginHandler = () => {
    if (token) {
      localStorage.setItem("token", "");
    }
    navigation("/");
  };

  return (
    <Wrapper>
      <Container>
        <Flex>
          <Paragraph color="blue" size="xl">
            Личный кабинет
          </Paragraph>

          <Menu>
            {token && (
              <>
                <Link to={routeNames.SUBSCRS}>
                  <Paragraph>Список Л/С</Paragraph>
                </Link>
                <Link to={routeNames.CHARGES}>
                  <Paragraph>Начисления</Paragraph>
                </Link>
              </>
            )}
            <Button onClick={loginHandler}>{token ? "Выйти" : "Войти"}</Button>
          </Menu>
        </Flex>
      </Container>
    </Wrapper>
  );
};
