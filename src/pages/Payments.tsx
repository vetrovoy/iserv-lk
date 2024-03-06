import { useParams } from "react-router-dom";

import { Title } from "../ui/typography/Title";
import { PaymentsList } from "../components/payments/PaymentsList";

export const Payments = () => {
  const token = localStorage.getItem("token");
  const { slug } = useParams();

  return (
    <>
      <Title style={{ marginBottom: 20 }}>Платежи</Title>
      {slug && token && <PaymentsList ExtToken={token} id={slug} />}
    </>
  );
};
