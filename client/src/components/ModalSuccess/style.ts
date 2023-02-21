import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  height: 294px;

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

  & > div {
    width: 100%;
    max-width: 400.4px;
    height: 176px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    b {
      color: var(--color-title);
    }

    & > h3 {
      font-size: 16px;
    }

    & > p {
      font-size: 14px;
    }

    h3,
    p {
      font-weight: 400;
      line-height: 24px;

      color: var(--color-text);
    }
  }
`;

export { Container };
