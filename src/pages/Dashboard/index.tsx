import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import search from "../../assets/search.svg";
import { Container } from "./style";
import { Task } from "../../components/Task";

const Dashboard = () => {
  return (
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
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </menu>
      </div>
    </Container>
  );
};

export { Dashboard };
