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
`;

export { Container };
