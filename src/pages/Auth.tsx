import { AuthForm } from "../modules/AuthForm";

import { Container } from "../ui/layout/Container";
import { Main } from "../ui/layout/Main";

type Props = {};

export const Auth = (props: Props) => {
  return (
    <Main>
      <Container>
        <AuthForm />
      </Container>
    </Main>
  );
};
