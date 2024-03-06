import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Button } from "../../ui/button/Button";
import { Form } from "../../ui/form/Form";
import { Input } from "../../ui/form/Input";
import { Title } from "../../ui/typography/Title";
import API from "../../api/api";
import { validation } from "../../helpers/validation";
import { TFieldStatus, IFieldResult } from "../../ui/form/types/types";

import { InputPassword } from "../../components/form/inputPassword";
import { routeNames } from "../../routes/routes";

const AuthFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 84.5px);
`;

const AuthFormComponent = styled.div`
  max-width: 768px;
  width: 100%;
`;

type TAuthForm = {
  email: {
    value: string | undefined;
    valid: boolean | undefined;
  };
  password: {
    value: string | undefined;
    valid: boolean | undefined;
  };
};

const api = new API();

export const AuthForm: FC = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<TFieldStatus>("idle");

  const [form, setForm] = useState<TAuthForm>({
    email: {
      value: "",
      valid: false,
    },
    password: {
      value: "",
      valid: false,
    },
  });

  const isCanSendForm = !form.email.valid || !form.password.valid;

  const onEmailChange = (result: IFieldResult) => {
    setForm((prev) => ({
      ...prev,
      email: {
        value: result.value,
        valid: result.valid,
      },
    }));
  };

  const onPasswordChange = (result: IFieldResult) => {
    setForm((prev) => ({
      ...prev,
      password: {
        value: result.value,
        valid: result.valid,
      },
    }));
  };

  const onAuthFormSubmit = async () => {
    validateAuthForm();
    sendAuthForm();
  };

  const validateAuthForm = () => {
    setStatus("loading");
    setMsg("");

    if (!form.email.value) {
      setStatus("error");
      setMsg("Пожалуйста укажите почту");
      return;
    }

    if (!form.password.value) {
      setStatus("error");
      setMsg("Пожалуйста укажите пароль");
      return;
    }
  };

  const sendAuthForm = async () => {
    try {
      if (!form.email.value || !form.password.value) return;

      const auth = await api.logOn({
        Username: form.email.value,
        Password: form.password.value,
      });

      if (auth.success && auth.extToken) {
        setStatus("success");

        localStorage.setItem("token", auth.extToken);
        navigate(routeNames.SUBSCRS);
      } else {
        setStatus("error");
        setMsg(auth?.msg || "Непредвиденная ошибка");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMsg("Непредвиденная ошибка");
    }
  };

  return (
    <AuthFormWrapper>
      <AuthFormComponent>
        <Form msg={msg} status={status} onFormSubmit={onAuthFormSubmit}>
          <Title marginBottom="20px">Вход</Title>
          <Input
            label="Почта"
            rules={validation.email}
            onValueChange={onEmailChange}
            placeholder="email@mail.ru"
            name="email"
            type="email"
            marginBottom="20px"
            width="100%"
          />
          <InputPassword
            label="Пароль"
            rules={validation.length}
            onValueChange={onPasswordChange}
            width="100%"
            marginBottom="20px"
          />
          <Button disabled={isCanSendForm} type="submit">
            Войти
          </Button>
        </Form>
      </AuthFormComponent>
    </AuthFormWrapper>
  );
};
