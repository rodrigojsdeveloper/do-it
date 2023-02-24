import notFound from "../../assets/Group 102.svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const NotFound = () => {
  const token = sessionStorage.getItem("Do it: token");

  const navigate = useNavigate();

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

          <Button
            color="miniModal"
            size="notFound"
            type="button"
            onClick={() => {
              token ? navigate("/dashboard") : navigate("/");
            }}
          >
            Ir para minhas tarefas
          </Button>
        </div>

        <img src={notFound} alt="not found" />
      </div>
    </Container>
  );
};

export { NotFound };
