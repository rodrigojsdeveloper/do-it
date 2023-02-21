import password from "../../assets/ (4).svg";
import message from "../../assets/ (2).svg";
import user from "../../assets/ (3).svg";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";

const FormSignUp = () => {
  const { register } = useForm();

  return (
    <Container>
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
          required={true}
        />
        <Input
          src={message}
          alt="email"
          label="Login"
          message="Ex: camila@julia.com"
          name="email"
          type="email"
          autoComplete="off"
          register={register}
          placeholder="Digite seu email"
          required={true}
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
          required={true}
        />
        <Input
          src={password}
          alt="senha"
          label="Senha"
          message="Repita a senha"
          name="repeat_password"
          type="password"
          autoComplete="off"
          register={register}
          placeholder="**********"
          required={true}
        />

        <Button color="primary" size="signin" type="submit">
          Finalizar cadastro
        </Button>
      </div>
    </Container>
  );
};

export { FormSignUp };
