import { ModalBackground } from "../../components/ModalBackground";
import { ModalCreateTask } from "../../components/ModalCreateTask";
import { TaskNotFound } from "../../components/TaskNotFound";
import { FirstTask } from "../../components/FirstTask";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ITask, IUser } from "../../interfaces";
import search from "../../assets/search.svg";
import { Task } from "../../components/Task";
import { api } from "../../services/api";
import { Container } from "./style";
import { ListTasks } from "../../components/ListTasks";

const Dashboard = () => {
  const token = sessionStorage.getItem("Do it: token");

  const [user, setUser] = useState<IUser>({} as IUser);

  const [tasks, setTasks] = useState<Array<ITask>>([]);

  const [openModalCreateTask, setOpenModalCreateTask] =
    useState<boolean>(false);

  const [valueInput, setValueInput] = useState<string>("");

  const [filteredTasks, setFilteredTasks] = useState<Array<ITask>>([]);

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
  }, []);

  const handleListTasks = (task: ITask) => setTasks([...tasks, task]);

  return (
    <React.Fragment>
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
              <input
                type="text"
                placeholder="Pesquisar por tarefa"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <Button
                color="primary"
                size="searchTask"
                type="submit"
                onClick={() =>
                  setFilteredTasks(
                    tasks.filter((task) =>
                      task.title
                        .toLowerCase()
                        .includes(valueInput.toLowerCase())
                    )
                  )
                }
              >
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
          {tasks.length > 0 ? (
            <ListTasks
              tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
              setTasks={setTasks}
            />
          ) : (
            <>
              <TaskNotFound title={valueInput} />

              <FirstTask setOpenModalCreateTask={setOpenModalCreateTask} />
            </>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Dashboard };
