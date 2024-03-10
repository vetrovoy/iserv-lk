import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import API from "../../api/api";
import { TSubscr, TSubscrRequest } from "../../api/types";
import { SubscrsCard } from "../../components/subscrs/subscrsCard";
import { Spinner } from "../../ui/loaders/Spinner";
import { Paragraph } from "../../ui/typography/Paragraph";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

type TSubscrListStatus = "success" | "error" | "loading";

const api = new API();

export const SubscrList: FC<TSubscrRequest> = (ExtToken: TSubscrRequest) => {
  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<TSubscrListStatus>("loading");
  const [subscrs, setSubscrs] = useState<TSubscr[]>([]);

  useEffect(() => {
    async function getSubscrs() {
      if (!ExtToken) {
        setStatus("error");
        setMsg("Ошибка авторизации");
      }

      try {
        const subscrs = await api.subscr.getSubscrs(ExtToken);

        if (!subscrs.success) {
          setStatus("error");
          setMsg(subscrs?.msg || "Непредвиденная ошибка");
          return;
        }

        setSubscrs(subscrs.results);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        setMsg("Непредвиденная ошибка");
      }
    }

    getSubscrs();
  }, [ExtToken]);

  return (
    <>
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <FlexContainer>
          {subscrs.map((sub) => (
            <SubscrsCard key={sub.SubscrId} {...sub} />
          ))}
        </FlexContainer>
      )}
      {status === "error" && <Paragraph>{msg}</Paragraph>}
    </>
  );
};
