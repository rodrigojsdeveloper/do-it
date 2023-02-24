import taskNotFound from "../../assets/Group 101.svg";
import { Container } from "./style";

interface ITaskNotFound {
  title: string;
}

const TaskNotFound = ({ title }: ITaskNotFound) => {
  return (
    <Container>
      <div>
        <h2>Não encontramos resultados para:</h2>

        <p>{title}</p>
      </div>

      <img src={taskNotFound} alt="Task not found" />
    </Container>
  );
};

export { TaskNotFound };
