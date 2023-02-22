import { ModalBackground } from "../../components/ModalBackground";
import { ModalViewTask } from "../../components/ModalViewTask";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import search from "../../assets/search.svg";
import { Task } from "../../components/Task";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { FirstTask } from "../../components/FirstTask";
import { ITask, IUser } from "../../interfaces";
import { ModalCreateTask } from "../../components/ModalCreateTask";

const Dashboard = () => {
  const token = sessionStorage.getItem("Do it: token");

  const [user, setUser] = useState<IUser>({} as IUser);

  const [tasks, setTasks] = useState<Array<ITask>>([]);

  const [openModalCreateTask, setOpenModalCreateTask] =
    useState<boolean>(false);

  const [openModalViewTask, setOpenModalViewTask] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setTasks(res.data.tasks);
      })
      .catch((error) => console.error(error));
  });

  const handleListTasks = (task: ITask) => setTasks([...tasks, task]);

  return (
    <>
      {openModalViewTask ? (
        <ModalBackground>
          <ModalViewTask
            setCloseModal={setOpenModalViewTask}
            tasks={tasks}
            setTasks={setTasks}
          />
        </ModalBackground>
      ) : null}
      {openModalCreateTask ? (
        <ModalBackground>
          <ModalCreateTask
            handleListTasks={handleListTasks}
            setOpenModalCreateTask={setOpenModalCreateTask}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <Header />
        <form>
          <div>
            <div>
              <input placeholder="Pesquisar por tarefa" />
              <Button color="primary" size="searchTask" type="submit">
                <img src={search} alt="search" />
              </Button>
            </div>
            <Button
              color="secondary"
              size="newTask"
              type="button"
              onClick={() => setOpenModalCreateTask(true)}
            >
              Adicionar nova tarefa
            </Button>
          </div>
        </form>

        <div>
          {user.tasks ? (
            <menu>
              {user.tasks.map((task: any) => (
                <Task
                  task={task}
                  setOpenModalViewTask={setOpenModalViewTask}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
            </menu>
          ) : (
            <FirstTask setOpenModalCreateTask={setOpenModalCreateTask} />
          )}
        </div>
      </Container>
    </>
  );
};

export { Dashboard };
