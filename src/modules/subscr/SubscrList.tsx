import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import API from "../../api/api";
import { TSubscr, TSubscrRequest } from "../../api/types";
import { SubscrsCard } from "../../components/subscrs/subscrsCard";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const api = new API();

export const SubscrList: FC<TSubscrRequest> = (ExtToken: TSubscrRequest) => {
  const [subscrs, setSubscrs] = useState<TSubscr[] | null>(null);

  useEffect(() => {
    (async () => {
      if (!ExtToken) return;

      const response = await api.getSubscrs(ExtToken);

      if (!response.success) {
        setSubscrs(null);
        return;
      }

      setSubscrs(response.results);
    })();
  }, [ExtToken]);

  return (
    <FlexContainer>
      {subscrs &&
        subscrs.map((item) => <SubscrsCard key={item.SubscrId} {...item} />)}
    </FlexContainer>
  );
};
