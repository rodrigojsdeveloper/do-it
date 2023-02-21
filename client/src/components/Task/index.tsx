import trash from "../../assets/.svg";
import done from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";

interface ITask {
  setOpenModalViewTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Task = ({ setOpenModalViewTask }: ITask) => {
  return (
    <Container onClick={() => setOpenModalViewTask(true)}>
      <div>
        <div>
          <h2>Studying database-driven concepts</h2>
          <p>Start study through Kenzie app, for 1 hour and a half</p>
        </div>

        <div>
          <Button color="mini" size="miniButton" type="button">
            <img src={trash} alt="lixeira" />
          </Button>
          <Button color="mini" size="miniButton" type="button">
            <img src={done} alt="feito" />
          </Button>
        </div>
      </div>

      <div>
        <div>
          <div></div>
        </div>

        <p>07 March 2021</p>
      </div>
    </Container>
  );
};

export { Task };
