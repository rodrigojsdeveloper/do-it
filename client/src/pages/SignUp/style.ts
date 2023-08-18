import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding-left: 60px;

  & > div {
    width: 100%;
    height: 100vh;

    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    background-color: var(--color-secondary);

    & > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & > div {
        width: 100%;
        max-width: 335px;
        height: 423px;

        margin-top: 60px;
        margin-left: 115px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > div {
          width: 100%;
          height: 215px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          & > div {
            display: flex;
            flex-direction: row;
            align-items: flex-start;

            & > figure {
              width: 47px;
              height: 50px;

              padding: 10px;

              display: flex;
              justify-content: center;
              align-items: center;

              border-radius: 4px;
              background-color: var(--color-base-default);

              margin-right: 15px;

              & > img {
                width: 29px;
                height: 34px;
              }
            }

            & > div {
              height: 78px;

              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;

              & > h3 {
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
              }

              & > p {
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;

                width: 100%;
                max-width: 249px;
              }

              & > h3,
              & > p {
                color: var(--color-base-default);
              }
            }
          }
        }
      }
    }
  }

  & > section {
    width: 100%;
    max-width: 540px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    padding-top: 60px;
  }

  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;

    padding: 0;

    & > div {
      height: 449px;
      max-width: unset;
      padding: 30px 16px 0 18px;
      flex-direction: column-reverse;
      align-items: center;

      & > div {
        max-width: unset;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
          height: 334px;
          margin: 0;

          & > article {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          & > div {
            height: 215px;
          }
        }
      }
    }

    & > section {
      display: none;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export { Container };
