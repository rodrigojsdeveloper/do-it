import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 919px;
    height: 377px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    & > div {
      width: 100%;
      max-width: 342px;
      height: 203px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & > div {
        height: 114px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > h2 {
          font-weight: 700;
          font-size: 38px;
          line-height: 50px;
        }

        & > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;

          width: 100%;
          max-width: 300px;

          color: var(--color-text);

          & > b {
            color: var(--color-title);
          }
        }
      }
    }

    @media (max-width: 1024px) {
      & > img {
        display: none;
      }
    }
  }
`;

export { Container };
