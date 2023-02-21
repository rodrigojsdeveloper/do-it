import { ModalBackgroundHeader } from "../ModalBackgroundHeader";
import menuMobile from "../../assets/Group 84 (1).svg";
import { ModalExitAccount } from "../ModalExitAccount";
import menu from "../../assets/Group 84.svg";
import logo from "../../assets/Div.svg";
import { Container } from "./style";
import { useState } from "react";

const Header = () => {
  const [openModalExit, setOpenModalExit] = useState<boolean>(false);

  return (
    <>
      {openModalExit ? (
        <ModalBackgroundHeader>
          <ModalExitAccount />
        </ModalBackgroundHeader>
      ) : null}
      <Container>
        <img src={logo} alt="logo" />

        {window.screen.width >= 425 ? (
          <img
            src={menu}
            alt="menu"
            onClick={() => {
              setOpenModalExit(true);

              if (openModalExit) {
                setOpenModalExit(false);
              }
            }}
          />
        ) : (
          <img
            src={menuMobile}
            alt="menu"
            onClick={() => {
              setOpenModalExit(true);

              if (openModalExit) {
                setOpenModalExit(false);
              }
            }}
          />
        )}
      </Container>
    </>
  );
};

export { Header };
