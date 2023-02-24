import { ITask } from "../../interfaces";
import { Container } from "./style";
import { Task } from "../Task";

interface IListTasks {
  tasks: Array<ITask>;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const ListTasks = ({ tasks, setTasks }: IListTasks) => {
  return (
    <Container>
      {tasks.map((task: ITask) => (
        <Task task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </Container>
  );
};

export { ListTasks };
