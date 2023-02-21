import { useNavigate } from "react-router-dom";
import password from "../../assets/ (4).svg";
import message from "../../assets/ (2).svg";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Button } from "../Button";
import { Input } from "../Input";

const FormSignIn = () => {
  const navigate = useNavigate();

  const { register } = useForm();

  return (
    <Container>
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

        <div className="divButtons">
          <Button color="primary" size="signin" type="submit">
            Entrar
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
