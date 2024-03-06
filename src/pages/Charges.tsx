import { ChargesList } from "../components/charges/ChargesList";
import { PageHeading } from "../components/heading/PageHeading";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { Title } from "../ui/typography/Title";

export const Charges = () => {
  const token = localStorage.getItem("token");

  return (
    <ProtectedRoute>
      <PageHeading>
        <Title>Начисления</Title>
      </PageHeading>
      {token && <ChargesList ExtToken={token} />}
    </ProtectedRoute>
  );
};
