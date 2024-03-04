import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Button } from "../../ui/button/Button";
import { Form } from "../../ui/form/Form";
import { Input } from "../../ui/form/Input";
import { Paragraph } from "../../ui/typography/Paragraph";
import { Title } from "../../ui/typography/Title";
import API from "../../api/api";
import { validation } from "../../helpers/validation";
import { TFieldStatus, IFieldResult } from "../../ui/form/types/types";
import { userActions } from "../../store/user/user";
import { InputPassword } from "../../components/form/inputPassword";
import { useTypedDispatch } from "../../hooks/useTypedSelector";
import { routeNames } from "../../routes/routes";

const AuthFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AuthFormComponent = styled.div`
  max-width: 768px;
  width: 100%;
`;

type TAuthForm = {
  email: string;
  password: string;
};

const api = new API();

export const AuthForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<TFieldStatus>("idle");

  const [form, setForm] = useState<TAuthForm>({
    email: "",
    password: "",
  });

  const onAuthInputChange = (result: IFieldResult) => {
    setStatus("idle");

    setForm((prev) => {
      if (result.name === "email") {
        prev.email = result.value || "";
      }

      if (result.name === "password") {
        prev.password = result.value || "";
      }

      return prev;
    });
  };

  const onAuthFormSubmit = async () => {
    setStatus("loading");
    setMsg("");

    if (!form.email) {
      setStatus("error");
      setMsg("Пожалуйста укажите почту");
      return;
    }

    if (!form.password) {
      setStatus("error");
      setMsg("Пожалуйста укажите пароль");
      return;
    }

    const auth = await api.logOn({
      Username: form.email,
      Password: form.password,
    });

    if (auth.success) {
      setStatus("success");
      dispatch(userActions.setUser(form.email));
      dispatch(userActions.setToken(auth?.extToken));

      navigate(routeNames.HOME);
    } else {
      setStatus("error");
      setMsg(auth?.msg || "");
    }
  };

  return (
    <AuthFormWrapper>
      <AuthFormComponent>
        <Form msg={msg} status={status} onFormSubmit={onAuthFormSubmit}>
          <Title style={{ marginBottom: 20 }}>Вход</Title>
          <Paragraph>Почта</Paragraph>
          <Input
            rules={validation.email}
            onValueChange={onAuthInputChange}
            style={{ marginBottom: 20, width: "100%" }}
            placeholder="email@mail.ru"
            name="email"
            type="email"
          />
          <Paragraph>Пароль</Paragraph>
          <InputPassword
            rules={validation.length}
            onValueChange={onAuthInputChange}
            style={{ marginBottom: 20, width: "100%" }}
          />
          <Button type="submit">Войти</Button>
        </Form>
      </AuthFormComponent>
    </AuthFormWrapper>
  );
};
