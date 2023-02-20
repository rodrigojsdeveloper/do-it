import notFound from "../../assets/Group 102.svg";
import { Button } from "../../components/Button";
import { Container } from "./style";

const NotFound = () => {
  return (
    <Container>
      <div>
        <div>
          <div>
            <h2>Ooops!</h2>

            <p>
              Não encotramos a página que você procurou,{" "}
              <b>vamos tentar novamente.</b>
            </p>
          </div>

          <Button color="miniModal" size="notFound" type="button">
            Ir para minhas tarefas
          </Button>
        </div>

        <img src={notFound} alt="not found" />
      </div>
    </Container>
  );
};

export { NotFound };
