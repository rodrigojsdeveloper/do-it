import { ModalBackground } from "../../components/ModalBackground";
import { ModalViewTask } from "../../components/ModalViewTask";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import search from "../../assets/search.svg";
import { Task } from "../../components/Task";
import { Container } from "./style";
import { useState } from "react";

const Dashboard = () => {
  const [openModalViewTask, setOpenModalViewTask] =
    useState<boolean>(false);

    const [closeModal, setCloseModal] =
      useState<boolean>(false);

  return (
    <>
      {openModalViewTask ? (
        <ModalBackground>
          <ModalViewTask setCloseModal={setOpenModalViewTask} />
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
            <Button color="secondary" size="newTask" type="button">
              Adicionar nova tarefa
            </Button>
          </div>
        </form>

        <div>
          <menu>
            <Task setOpenModalViewTask={setOpenModalViewTask} />
          </menu>
        </div>
      </Container>
    </>
  );
};

export { Dashboard };
