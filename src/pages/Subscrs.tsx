import { useTypedSelector } from "../hooks/useTypedSelector";
import { SubscrList } from "../modules/subscr/SubscrList";
import { Title } from "../ui/typography/Title";

export const Subscrs = () => {
  const token = useTypedSelector((state) => state.user.token);
  console.log(token);
  return (
    <>
      <Title style={{ marginBottom: 20 }}>Список Л/С</Title>

      {token && <SubscrList ExtToken={token} />}
    </>
  );
};
