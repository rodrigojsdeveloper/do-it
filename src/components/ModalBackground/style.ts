import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;

  padding: 86px 80px;
  background: var(--shadow-two);

  @media (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (max-width: 375px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export { Container };
