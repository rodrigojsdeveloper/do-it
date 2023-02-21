import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 85px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 12px 60px;

  background-color: var(--color-base-default);
  border-bottom: 2px solid var(--color-white);

  & > img:nth-child(2) {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 12px 17px;
  }
`;

export { Container };
