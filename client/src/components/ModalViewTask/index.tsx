import { showDate } from "../utils/showDate";
import block from "../../assets/block.svg";
import { api } from "../../services/api";
import { ITask } from "../../interfaces";
import trash from "../../assets/.svg";
import done from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";
import x from "../../assets/X.svg";

interface IModalViewTask {
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
  tasks: Array<ITask>;
  task: ITask;
}

const ModalViewTask = ({
  setCloseModal,
  tasks,
  setTasks,
  task,
}: IModalViewTask) => {
  const token = sessionStorage.getItem("Do it: token");

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
        
        setCloseModal(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container>
      <header>
        <div>
          <figure>
            <img src={block} alt="bloco" />
          </figure>

          <h2>Visualizar</h2>
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
            onClick={() => deletedTask()}
          >
            <img src={done} alt="feito" />
          </Button>
          <Button
            color="miniModal"
            size="miniButton"
            type="button"
            onClick={() => setCloseModal(false)}
          >
            <img src={x} alt="x" />
          </Button>
        </div>
      </header>

      <div>
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <div>
          <div>
            <div></div>
          </div>

          <p>{showDate(task.created_at)}</p>
        </div>
      </div>
    </Container>
  );
};

export { ModalViewTask };
