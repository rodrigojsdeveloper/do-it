import { ModalBackground } from "../ModalBackground";
import { ModalViewTask } from "../ModalViewTask";
import { showDate } from "../utils/showDate";
import { api } from "../../services/api";
import { ITask } from "../../interfaces";
import React, { useState } from "react";
import trash from "../../assets/.svg";
import done from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";

interface ITaskProps {
  task: ITask;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
  tasks: Array<ITask>;
}

const Task = ({ task, setTasks, tasks }: ITaskProps) => {
  const token = sessionStorage.getItem("Do it: token");

  const [openModalViewTask, setOpenModalViewTask] = useState<boolean>(false);

  const deletedTask = () => {
    api
      .delete(`tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const newList = tasks.filter((taskk: ITask) => taskk.id != task.id);

        setTasks(newList);
      })
      .catch((error) => console.error(error));
  };

  return (
    <React.Fragment>
      {openModalViewTask ? (
        <ModalBackground>
          <ModalViewTask
            setCloseModal={setOpenModalViewTask}
            tasks={tasks}
            setTasks={setTasks}
            task={task}
          />
        </ModalBackground>
      ) : null}
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
    </React.Fragment>
  );
};

export { Task };
