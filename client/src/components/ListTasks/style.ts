import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1560px) {
    justify-content: space-around;
  }
`;

export { Container };
