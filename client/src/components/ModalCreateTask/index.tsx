import { useForm } from "react-hook-form";
import task from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";
import x from "../../assets/X.svg";
import { Input } from "../Input";

const ModalCreateTask = () => {
  const { register } = useForm();

  return (
    <Container>
      <header>
        <div>
          <figure>
            <img src={task} alt="task" />
          </figure>

          <h2>Adicionar</h2>
        </div>

        <Button color="miniModal" size="miniButton" type="button">
          <img src={x} alt="x" />
        </Button>
      </header>

      <form>
        <Input
          label="Título"
          message="Ex: Estudar React - Chakra UI"
          alt=""
          src=""
          register={register}
          name="title"
          type="text"
          autoComplete="off"
          placeholder="Digite seu título"
          required={true}
        />
        <Input
          label="Descrição"
          message="Máximo 100 caracteres"
          alt=""
          src=""
          register={register}
          name="description"
          type="text"
          autoComplete="off"
          placeholder="Digite sua descrição"
          required={true}
        />

        <Button color="primary" size="modalTwo" type="submit">
          Adicionar Tarefa
        </Button>
      </form>
    </Container>
  );
};

export { ModalCreateTask };
