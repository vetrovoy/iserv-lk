import styled from "styled-components";

import { SubscrList } from "../modules/subscr/SubscrList";
import { Button } from "../ui/button/Button";
import { Title } from "../ui/typography/Title";

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Subscrs = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Heading>
        <Title>Список Л/С</Title>
        <Button>Добавить лицевой счет</Button>
      </Heading>
      {token && <SubscrList ExtToken={token} />}
    </>
  );
};
