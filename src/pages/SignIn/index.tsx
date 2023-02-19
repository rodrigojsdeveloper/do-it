import { FormSignIn } from "../../components/FormSignin";
import logoMobile from "../../assets/Group 75 (3).svg";
import logo from "../../assets/Group 75 (2).svg";
import { Container } from "./style";

const SignIn = () => {
  console.log();

  return (
    <Container>
      <div>
        <div>
          <div>
            {window.screen.width >= 1600 ? (
              <img src={logo} alt="Dot it" />
            ) : (
              <img src={logoMobile} alt="Dot it" />
            )}

            <div>
              <h1>O jeito fácil, grátis</h1>

              <p>
                flexível e atrativo de gerenciar{" "}
                <b>seus projetos em uma única plataforma</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <FormSignIn />
      </section>
    </Container>
  );
};

export { SignIn };
