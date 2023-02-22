import back from "../../assets/log-out.svg";
import { Container } from "./style";

interface IModalExitAccount {
  user: any;
}

const ModalExitAccount = ({ user }: IModalExitAccount) => {
  return (
    <Container>
      <div>
        <h2>{user.name}</h2>
      </div>

      <div>
        <figure>
          <img src={back} alt="sair" />
        </figure>

        <div>
          <h3>Sair da minha conta</h3>
          <p>Sair da minha conta agora</p>
        </div>
      </div>
    </Container>
  );
};

export { ModalExitAccount };
