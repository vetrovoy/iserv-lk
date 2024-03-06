import { FC } from "react";

import { Table, TableContainer, TableRow, Td, Th } from "../../ui/table/table";

import { formatters } from "../../helpers/formatters";
import { TPayment } from "../../api/types";

type TPaymentsTable = {
  data: TPayment[];
};

export const PaymentsTable: FC<TPaymentsTable> = ({ data }: TPaymentsTable) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <Th>Дата</Th>
            <Th>Период платежа</Th>
            <Th>Источник платежа</Th>
            <Th>Сумма платежа</Th>
          </TableRow>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <TableRow key={data.PaymenId}>
                <Td>{formatters.fullDateToISO(data.Date)}</Td>
                <Td>{data.PeriodName}</Td>
                <Td>{data.PaymentSource}</Td>
                <Td>{data.Amount}</Td>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};
