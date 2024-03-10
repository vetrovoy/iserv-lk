import { FC, useEffect, useState } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import API from "../../api/api";
import { TPayment } from "../../api/types";

import { Spinner } from "../../ui/loaders/Spinner";
import { Paragraph } from "../../ui/typography/Paragraph";

import { PaymentsDateRange } from "../../components/payments/PaymentsDateRange";
import { PaymentsTable } from "../../components/payments/PaymentsTable";

type TPaymentsList = {
  id: string;
  ExtToken: string;
};

type TPaymentsListStatus = "success" | "error" | "loading";

const api = new API();

export const PaymentsList: FC<TPaymentsList> = ({
  ExtToken,
  id,
}: TPaymentsList) => {
  const period = useTypedSelector((state) => state.period.paymentsPeriod);

  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<TPaymentsListStatus>("loading");
  const [payments, setPayments] = useState<TPayment[]>([]);

  useEffect(() => {
    async function getPayments() {
      if (!id) {
        setMsg("Лицевой счет не найден");
        setStatus("error");
      }

      setStatus("loading");

      try {
        const payments = await api.payments.getPayments({
          ExtToken: ExtToken,
          SubscrId: id,
          PeriodBegin: period.begin,
          PeriodEnd: period.end,
        });

        if (payments.success && payments.results) {
          if (payments.results.length === 0) {
            setMsg("Отсутствуют данные за данный период");
            setStatus("error");
            return;
          }

          setPayments(payments.results);
          setStatus("success");
        } else {
          setMsg(payments.msg || "Непредвиденная ошибка");
          setStatus("error");
        }
      } catch (error) {
        console.log(error);
        setStatus("error");
        setMsg("Непредвиденная ошибка");
      }
    }
    getPayments();
  }, [id, period.begin, period.end, ExtToken]);

  return (
    <>
      <PaymentsDateRange />
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <>
          <PaymentsTable data={payments} />
        </>
      )}
      {status === "error" && <Paragraph>{msg}</Paragraph>}
    </>
  );
};
