import { FC, useEffect, useState } from "react";

import styled from "styled-components";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import API from "../../api/api";
import { TPayment } from "../../api/types";
import { formatters } from "../../helpers/formatters";

import { StyledDateInputs } from "./PaymentsDateRange";

type TPaymentsList = {
  id: number;
  ExtToken: string;
};

const TableContainer = styled.div`
  width: 100%;
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const api = new API();

export const PaymentsList: FC<TPaymentsList> = ({
  ExtToken,
  id,
}: TPaymentsList) => {
  const period = useTypedSelector((state) => state.paymentsPeriod.period);

  const [payments, setPayments] = useState<TPayment[]>([]);

  useEffect(() => {
    async function getPayments() {
      if (!id) return;

      try {
        const PeriodBegin = formatters.ISOToNumber(period.begin);
        const PeriodEnd = formatters.ISOToNumber(period.end);

        const payments = await api.getPayments({
          ExtToken: ExtToken,
          subscrId: id,
          PeriodBegin: PeriodBegin,
          PeriodEnd: PeriodEnd,
        });

        if (payments.success && payments.result) {
          setPayments(payments.result);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPayments();
  }, [id, period.begin, period.end, ExtToken]);

  console.log(period);

  return (
    <>
      <StyledDateInputs />
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <Th>Дата платежа</Th>
              <Th>Период платежа</Th>
              <Th>Источник платежа</Th>
              <Th>Сумма платежа</Th>
            </TableRow>
          </thead>
          <tbody>
            {payments &&
              payments.map((data) => {
                return (
                  <TableRow key={data.SubscrId}>
                    <Td>
                      {formatters
                        .stringToDate(data.Date)
                        .toLocaleDateString("ru")}
                    </Td>
                    <Td>{data.PeriodName}</Td>
                    <Td>{data.PaymentSource}</Td>
                    <Td>{data.Amount}</Td>
                  </TableRow>
                );
              })}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};
