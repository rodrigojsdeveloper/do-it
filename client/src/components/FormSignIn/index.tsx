import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import password from "../../assets/ (4).svg";
import message from "../../assets/ (2).svg";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import * as yup from "yup";

const FormSignIn = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunc = (data: object) => {
    setLoad(true);

    api
      .post("signin", data)
      .then((res) => {
        sessionStorage.setItem("Do it: token", res.data.token);

        navigate("/dashboard");
      })
      .catch((error) => console.error(error))
      .finally(() => setLoad(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunc)}>
      <h2>Bem vindo de volta!</h2>

      <div>
        <Input
          src={message}
          alt="message"
          label="Login"
          message="Ex: camila@julia.com"
          name="email"
          type="email"
          autoComplete="off"
          register={register}
          placeholder="Digite seu login"
          error={errors.email?.message}
        />
        <Input
          src={password}
          alt="senha"
          label="Senha"
          message="Digite a senha"
          name="password"
          type="password"
          autoComplete="off"
          register={register}
          placeholder="**********"
          error={errors.password?.message}
        />

        <div className="divButtons">
          <Button color="primary" size="signin" type="submit" disabled={load}>
            {load ? "Entrando" : "Entrar"}
          </Button>
          <p>Ainda não possui uma conta?</p>
          <Button
            color="disable"
            size="signin"
            type="button"
            onClick={() => navigate("/signup")}
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { FormSignIn };
