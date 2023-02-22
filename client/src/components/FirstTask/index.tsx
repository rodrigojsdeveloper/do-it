import task from "../../assets/task.svg";
import { Container } from "./style";
import { Button } from "../Button";

interface IFirstTask {
  setOpenModalCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstTask = ({ setOpenModalCreateTask }: IFirstTask) => {
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

          <Button
            color="primary"
            size="newTaskPrimary"
            type="button"
            onClick={() => setOpenModalCreateTask(true)}
          >
            Criar minha primeira tarefa
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { FirstTask };
