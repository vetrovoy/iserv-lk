import { ChargesList } from "../components/charges/ChargesList";
import { Title } from "../ui/typography/Title";

export const Charges = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Title style={{ marginBottom: 20 }}>Начисления</Title>

      {token && <ChargesList ExtToken={token} />}
    </>
  );
};
