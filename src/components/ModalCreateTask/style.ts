import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  height: 504px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  border: 1px solid var(--color-white-three);
  background-color: var(--color-base-default);
  box-shadow: 0px 0px 20px -10px var(--shadow);

  padding: 25px 20px 35px 20px;

  & > header {
    width: 100%;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 28px;

    & > div {
      width: 100%;
      max-width: 140.84px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > figure {
        width: 30.43px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        background-color: var(--color-primary);
      }

      & > h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        width: 100%;
        max-width: 99.6px;
      }
    }
  }

  & > form {
    width: 100%;
    max-width: 418px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    margin: auto;

    & > div:nth-child(2) {
      height: 155px;
      & > div {
        height: 127px;
        & > div {
          height: 100px;
        }
      }
    }
  }
`;

export { Container };
