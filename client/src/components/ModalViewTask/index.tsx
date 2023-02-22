import { Container } from "./style";
import { Button } from "../Button";
import x from "../../assets/X.svg";
import trash from "../../assets/.svg";
import done from "../../assets/.svg";
import block from "../../assets/block.svg";
import { useEffect } from "react";
import { api } from "../../services/api";
import { ITask } from "../../interfaces";

interface IModalViewTask {
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
  tasks: Array<ITask>;
}

const ModalViewTask = ({ setCloseModal, tasks, setTasks }: IModalViewTask) => {
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
          const newList = tasks.filter((taskk: ITask) => taskk.id);

          setTasks(newList);
        })
        .catch((error) => console.error(error));
    });
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
          <h3>Estudo de NextJS: Getstaticprops vs Getserversideprops</h3>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source.
          </p>
        </div>

        <div>
          <div>
            <div></div>
          </div>

          <p>07 March 2021</p>
        </div>
      </div>
    </Container>
  );
};

export { ModalViewTask };
