import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 510px;
  height: 585px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 40px 30px;
  border-radius: 4px;

  border: 5px solid var(--color-white);
  background-color: var(--color-base-default);

  margin-top: 69px;
  margin-left: -260px;

  & > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }

  & > div {
    width: 100%;
    height: 442px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .divButtons {
      width: 100%;
      max-width: 450px;
      height: 180px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      & > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        color: var(--color-text);
      }
    }
  }

  @media (max-width: 1600px) {
    margin: 0;
    margin: -50px;
    margin-bottom: 47px;

    border-width: 2px;

    padding: 45px 15px;
  }
`;

export { Container };
