import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 510px;
  height: 736px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 40px 30px;
  border-radius: 4px;

  border: 5px solid var(--color-white);
  background-color: var(--color-base-default);

  margin-top: 60px;
  margin-left: -255px;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }

  & > div {
    width: 100%;
    max-width: 450px;
    height: 593px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 1600px) {
    margin: 0;
    margin-top: 35px;
    margin-bottom: 47px;

    border-width: 2px;

    & > h2 {
      padding-bottom: 20px;
    }
  }

  @media (max-width: 500px) {
    padding: 23.5px 14.83px;
  }
`;

export { Container };
