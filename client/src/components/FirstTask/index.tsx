import task from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";

const FirstTask = () => {
  return (
    <Container>
      <div>
        <img src={task} alt="task" />

        <div>
          <h2>Vamos criar sua primeira tarefa</h2>

          <p>
            Insira sua meta e mostre a você mesmo sua capacidade em cumprir{" "}
            <b>suas atividades</b>
          </p>

          <Button color="primary" size="newTaskPrimary" type="button">
            Criar minha primeira tarefa
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { FirstTask };
