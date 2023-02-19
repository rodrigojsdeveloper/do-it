import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding-right: 20px;

  & > div {
    width: 100%;
    max-width: 1060px;
    height: 100vh;

    padding: 20px;

    background-color: var(--color-secondary);

    & > div {
      width: 100%;
      max-width: 645px;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      & > div {
        width: 100%;
        max-width: 335px;
        height: 254px;

        margin-top: 172px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > div {
          width: 100%;
          height: 118px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          & > h1 {
            font-weight: 700;
            font-size: 38px;
            line-height: 50px;
          }

          & > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            width: 100%;
            max-width: 285px;
          }

          & > h1,
          & > p {
            color: var(--color-base-default);
          }
        }
      }
    }
  }

  & > section {
    width: 100%;
    max-width: 540px;
  }

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;

    padding: 0;

    & > div {
      height: 366px;
      max-width: unset;
      padding: 30px 16px 0 18px;

      & > div {
        max-width: unset;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
          height: 227px;
          margin: 0;

          & > div {
            height: 108px;
          }
        }
      }
    }

    & > section {
      padding: 0 16px 0 18px;

      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 375px) {
    & > div {
      & > div {
        & > div {
          & > div {
            & > h1 {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
`;

export { Container };
