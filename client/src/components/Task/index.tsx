import trash from "../../assets/.svg";
import done from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";
import { useEffect } from "react";
import { api } from "../../services/api";
import { ITask } from "../../interfaces";
import { showDate } from "../utils/showDate";

interface ITaskProps {
  setOpenModalViewTask: React.Dispatch<React.SetStateAction<boolean>>;
  task: ITask;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
  tasks: Array<ITask>;
}

const Task = ({ setOpenModalViewTask, task, setTasks, tasks }: ITaskProps) => {
  const token = sessionStorage.getItem("Do it: token");

  const deletedTask = () => {
    useEffect(() => {
      api
        .get("users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          const newList = tasks.filter((taskk: ITask) => taskk.id != task.id);

          setTasks(newList);
        })
        .catch((error) => console.error(error));
    });
  };

  return (
    <Container>
      <div>
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>

        <div>
          <Button
            color="mini"
            size="miniButton"
            type="button"
            onClick={() => deletedTask()}
          >
            <img src={trash} alt="lixeira" />
          </Button>
          <Button
            color="mini"
            size="miniButton"
            type="button"
            onClick={() => setOpenModalViewTask(true)}
          >
            <img src={done} alt="feito" />
          </Button>
        </div>
      </div>

      <div>
        <div>
          <div></div>
        </div>

        <p>{showDate(task.created_at)}</p>
      </div>
    </Container>
  );
};

export { Task };
