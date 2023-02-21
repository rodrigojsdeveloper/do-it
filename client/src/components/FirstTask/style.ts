import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  height: 351px;

  padding: 100px 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: var(--transparent);
  border: 2px dashed var(--color-grey-three);

  & > div {
    width: 100%;
    max-width: 521px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    & > div {
      height: 183px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      & > h2 {
        font-weight: 700;
        font-size: 34px;
        line-height: 40px;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }

      & > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        width: 100%;
        max-width: 334px;

        color: var(--color-text);

        & > b {
          color: var(--color-title);
        }
      }

      @media (max-width: 375px) {
        height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    & > div {
      max-width: unset;
    }
  }
`;

export { Container };
