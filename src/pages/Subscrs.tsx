import { SubscrList } from "../modules/subscr/SubscrList";
import { Button } from "../ui/button/Button";
import { Title } from "../ui/typography/Title";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { PageHeading } from "../components/heading/PageHeading";

export const Subscrs = () => {
  const token = localStorage.getItem("token");

  return (
    <ProtectedRoute>
      <PageHeading>
        <Title>Список Л/С</Title>
        <Button>Добавить лицевой счет</Button>
      </PageHeading>
      {token && <SubscrList ExtToken={token} />}
    </ProtectedRoute>
  );
};
