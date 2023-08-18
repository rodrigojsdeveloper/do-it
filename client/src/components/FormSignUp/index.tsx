import { yupResolver } from "@hookform/resolvers/yup";
import password from "../../assets/ (4).svg";
import message from "../../assets/ (2).svg";
import user from "../../assets/ (3).svg";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import * as yup from "yup";

interface IFormSignUp {
  setOpenModalSucess: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalError: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormSignUp = ({ setOpenModalSucess, setOpenModalError }: IFormSignUp) => {
  const [load, setLoad] = useState<boolean>(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
    repeat_password: yup
      .string()
      .required("Repetir senha obrigatória")
      .oneOf([yup.ref("password")], "As senhas não conferem"),
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

    Reflect.deleteProperty(data, "repeat_password");

    api
      .post("users/signup", data)
      .then((res) => setOpenModalSucess(true))
      .catch((error) => {
        console.error(error);

        setOpenModalError(true);
      })
      .finally(() => setLoad(false));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunc)}>
      <h2>Crie sua conta</h2>

      <div>
        <Input
          src={user}
          alt="user"
          label="Nome"
          message="Ex: camila"
          name="name"
          type="text"
          autoComplete="off"
          register={register}
          placeholder="Digite seu nome"
          error={errors.name?.message}
        />
        <Input
          src={message}
          alt="email"
          label="Login"
          message="Ex: camila@julia.com"
          name="email"
          type="text"
          autoComplete="off"
          register={register}
          placeholder="Digite seu email"
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
        <Input
          src={password}
          alt="senha"
          label="Repetir senha"
          message="Repita a senha"
          name="repeat_password"
          type="password"
          autoComplete="off"
          register={register}
          placeholder="**********"
          error={errors.repeat_password?.message}
        />

        <Button color="primary" size="signin" type="submit" disabled={load}>
          {load ? "Cadastrando..." : "Finalizar cadastro"}
        </Button>
      </div>
    </Container>
  );
};

export { FormSignUp };
