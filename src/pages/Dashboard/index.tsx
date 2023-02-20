import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import search from "../../assets/search.svg";
import { Container } from "./style";
import { Task } from "../../components/Task";
import { FirstTask } from "../../components/FirstTask";

const Dashboard = () => {
  return (
    <Container>
      <Header />

      <div>
        <FirstTask />
      </div>
    </Container>
  );
};

export { Dashboard };
