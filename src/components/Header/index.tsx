import menuMobile from "../../assets/Group 84 (1).svg";
import menu from "../../assets/Group 84.svg";
import logo from "../../assets/Div.svg";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />

      {window.screen.width >= 425 ? (
        <img src={menu} alt="menu" />
      ) : (
        <img src={menuMobile} alt="menu" />
      )}
    </Container>
  );
};

export { Header };
