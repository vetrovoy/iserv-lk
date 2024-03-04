import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../ui/button/Button";
import { Title } from "../ui/typography/Title";
import { routeNames } from "../routes/routes";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Menu = styled.div`
  display: flex;
  gap: 10px;
`;

export const Home = () => {
  const user = useTypedSelector((state) => state.user.user);

  return (
    <>
      <Title style={{ marginBottom: 20 }}>Главная {user}</Title>
      <Menu>
        <Link to={routeNames.PAYMENTS}>
          <Button>Платежи</Button>
        </Link>
        <Link to={routeNames.SUBSCRS}>
          <Button>Список Л/С</Button>
        </Link>
        <Link to={routeNames.CHARGES}>
          <Button>Начисления</Button>
        </Link>
      </Menu>
    </>
  );
};
