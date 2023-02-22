import { ModalBackgroundHeader } from "../ModalBackgroundHeader";
import menuMobile from "../../assets/Group 84 (1).svg";
import { ModalExitAccount } from "../ModalExitAccount";
import menu from "../../assets/Group 84.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import logo from "../../assets/Div.svg";
import { Container } from "./style";

const Header = () => {
  const token = sessionStorage.getItem("Do it: token");

  const [user, setUser] = useState({});

  const [openModalExit, setOpenModalExit] = useState<boolean>(false);

  useEffect(() => {
    api
      .get("users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error));
  });

  return (
    <>
      {openModalExit ? (
        <ModalBackgroundHeader>
          <ModalExitAccount user={user} />
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
