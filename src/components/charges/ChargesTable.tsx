import { FC } from "react";

import { Table, TableContainer, TableRow, Td, Th } from "../../ui/table/table";

import { TCharge } from "../../api/types";

type TChargesTable = {
  data: TCharge[];
};

export const ChargesTable: FC<TChargesTable> = ({ data }: TChargesTable) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <Th>Лицевой счет</Th>
            <Th>Период начисления</Th>
            <Th>Сумма начислений за период</Th>
            <Th>Наименование услуги</Th>
          </TableRow>
        </thead>
        <tbody>
          {data.map((charge) => {
            return (
              <TableRow key={charge.ChargeId}>
                <Td>{charge.SubscrId}</Td>
                <Td>{charge.PeriodName}</Td>
                <Td>{charge.Payment}</Td>
                <Td>{charge.ChargeDetails[0].Name}</Td>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};
