import { FC, useEffect, useState } from "react";

import API from "../../api/api";

import { Spinner } from "../../ui/loaders/Spinner";
import { Paragraph } from "../../ui/typography/Paragraph";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TCharge } from "../../api/types";

import { ChargesDateRange } from "../../components/charges/ChargesDateRange";
import { ChargesTable } from "../../components/charges/ChargesTable";

type TChargesList = {
  ExtToken: string;
};

type TChargesListStatus = "success" | "error" | "loading";

const api = new API();

export const ChargesList: FC<TChargesList> = ({ ExtToken }: TChargesList) => {
  const period = useTypedSelector((state) => state.period.chargesPeriod);

  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<TChargesListStatus>("loading");
  const [charges, setCharges] = useState<TCharge[]>([]);

  useEffect(() => {
    async function getCharges() {
      if (!ExtToken) {
        setMsg("Ошибка авторизации");
        setStatus("error");
      }

      try {
        const charges = await api.charges.getCharges({
          ExtToken: ExtToken,
          PeriodBegin: period.begin,
          PeriodEnd: period.end,
        });

        if (charges.success && charges.results) {
          if (charges.results.length === 0) {
            setMsg("Отсутствуют данные за данный период");
            setStatus("error");
            return;
          }

          setCharges(charges.results);
          setStatus("success");
        } else {
          setMsg(charges.msg || "Непредвиденная ошибка");
          setStatus("error");
        }
      } catch (error) {
        console.log(error);
        setStatus("error");
        setMsg("Непредвиденная ошибка");
      }
    }
    getCharges();
  }, [ExtToken, period.begin, period.end]);

  return (
    <>
      <ChargesDateRange />
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <>
          <ChargesTable data={charges} />
        </>
      )}
      {status === "error" && <Paragraph>{msg}</Paragraph>}
    </>
  );
};
