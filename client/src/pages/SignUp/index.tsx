import { ModalBackground } from "../../components/ModalBackground";
import { ModalSuccess } from "../../components/ModalSuccess";
import { FormSignUp } from "../../components/FormSignUp";
import { ModalError } from "../../components/ModalError";
import logoMobile from "../../assets/Group 75 (3).svg";
import simplicity from "../../assets/Group 50.svg";
import logo from "../../assets/Group 75 (2).svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import agility from "../../assets/Vector.svg";
import React, { useState } from "react";
import arrow from "../../assets/.svg";
import { Container } from "./style";

const SignUp = () => {
  const navigate = useNavigate();

  const [openModalSucess, setOpenModalSucess] = useState<boolean>(false);

  const [openModalError, setOpenModalError] = useState<boolean>(false);

  return (
    <React.Fragment>
      {openModalSucess ? (
        <ModalBackground>
          <ModalSuccess setOpenModalSucess={setOpenModalSucess} />
        </ModalBackground>
      ) : null}
      {openModalError ? (
        <ModalBackground>
          <ModalError setOpenModalError={setOpenModalError} />
        </ModalBackground>
      ) : null}
      <Container>
        <section>
          <Button
            color="secondary"
            size="back"
            type="button"
            onClick={() => navigate("/")}
          >
            <img src={arrow} alt="arrow" />
          </Button>
        </section>

        <div>
          <FormSignUp
            setOpenModalSucess={setOpenModalSucess}
            setOpenModalError={setOpenModalError}
          />
          <div>
            <div>
              {window.screen.width >= 1600 ? (
                <img src={logo} alt="Dot it" />
              ) : (
                <article>
                  <img src={logoMobile} alt="Dot it" />
                  <Button
                    color="secondary"
                    size="backMobile"
                    type="button"
                    onClick={() => navigate("/")}
                  >
                    <img src={arrow} alt="arrow" />
                  </Button>
                </article>
              )}

              <div>
                <div>
                  <figure>
                    <img src={agility} alt="agility" />
                  </figure>

                  <div>
                    <h3>Agilidade</h3>
                    <p>Agilize seus projetos com rapidez e muita performance</p>
                  </div>
                </div>

                <div>
                  <figure>
                    <img src={simplicity} alt="simplicity" />
                  </figure>

                  <div>
                    <h3>Simplicidade</h3>
                    <p>
                      Armazene seus projetos em uma interface altamente usual
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { SignUp };
