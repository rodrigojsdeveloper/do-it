import taskNotFound from "../../assets/Group 101.svg";
import { Container } from "./style";

const TaskNotFound = () => {
  return (
    <Container>
      <div>
        <h2>Não encontramos resultados para:</h2>

        <p>Aprender a utilizar o chakra UI</p>
      </div>

      <img src={taskNotFound} alt="Task not found" />
    </Container>
  );
};

export { TaskNotFound };
