import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 456px;
  height: 196px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: var(--transparent);
  border: 1px solid var(--color-white-three);

  box-shadow: 0px 0px 20px -10px var(--shadow);

  padding: 23px 28px;
  margin: 0 10px 50px 10px;

  & > div:nth-child(1) {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
      width: 100%;
      height: 106px;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    & > div:nth-child(1) {
      max-width: 322px;
      flex-direction: column;

      & > h2 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        @media (max-width: 425px) {
          font-size: 14px;
        }
      }

      & > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        color: var(--color-text);

        @media (max-width: 425px) {
          font-size: 12px;
        }
      }
    }

    & > div:nth-child(2) {
      max-width: 75px;
      flex-direction: row;
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 7px;

    & > div {
      width: 100%;
      height: 9px;

      background: var(--color-white-three);
      border: 1px solid var(--color-white-three);

      & > div {
        width: 25px;
        height: 9px;

        background-color: var(--color-primary-two);
      }
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: var(--color-placeholder);
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    padding: 23px 13px;
  }
`;

export { Container };
