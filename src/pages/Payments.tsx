import { useParams } from "react-router-dom";

import { PaymentsList } from "../components/payments/PaymentsList";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { PageHeading } from "../components/heading/PageHeading";
import { Title } from "../ui/typography/Title";

export const Payments = () => {
  const token = localStorage.getItem("token");
  const { slug } = useParams();

  return (
    <ProtectedRoute token={token}>
      <PageHeading>
        <Title>Платежи</Title>
      </PageHeading>
      {slug && token && <PaymentsList ExtToken={token} id={slug} />}
    </ProtectedRoute>
  );
};
