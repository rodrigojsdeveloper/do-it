import interrogation from "../../assets/.svg";
import { Container } from "./style";
import { Button } from "../Button";
import x from "../../assets/X.svg";

const ModalError = () => {
  return (
    <Container>
      <header>
        <div>
          <figure>
            <img src={interrogation} alt="!" />
          </figure>

          <h2>Yeess..</h2>
        </div>

        <Button color="miniModal" size="miniButton" type="button">
          <img src={x} alt="x" />
        </Button>
      </header>

      <div>
        <h3>Ocorreu algum erro!</h3>

        <Button color="miniModal" size="modal" type="button">
          Tentar novamente
        </Button>

        <p>
          Você já pode tentar novamente, <b>clicando</b> no botão acima ou
          aguarde alguns minutos...
        </p>
      </div>
    </Container>
  );
};

export { ModalError };
