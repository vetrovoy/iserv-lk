import React, { FC } from "react";
import styled from "styled-components";

import { TSubscr } from "../../api/types";
import { Paragraph } from "../../ui/typography/Paragraph";

const SubscrsCardComponent = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 0px 6px 0px rgba(111, 120, 130, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #ecf2f8;
  margin-bottom: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  max-width: calc(33% - 5px);
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(111, 120, 130, 0.4);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const SubscrsCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  width: 100%;
`;

export const SubscrsCard: FC<TSubscr> = ({
  SubscrId,
  OrgId,
  SubscrCode,
  FIO,
  Address,
}: TSubscr) => {
  return (
    <SubscrsCardComponent>
      <Paragraph color="black" size="lg">
        Л/С: {SubscrId}
      </Paragraph>

      <FlexContainer>
        <SubscrsCardContent>
          <Paragraph color="black">{Address} </Paragraph>
          <Paragraph color="black">{FIO}</Paragraph>
        </SubscrsCardContent>

        <SubscrsCardContent>
          <Paragraph>{OrgId}</Paragraph>
          <Paragraph>Номер: {SubscrCode} </Paragraph>
        </SubscrsCardContent>
      </FlexContainer>
    </SubscrsCardComponent>
  );
};
