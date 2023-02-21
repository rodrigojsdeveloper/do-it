import styled from "styled-components";

const Container = styled.div`
  & > form {
    width: 100%;
    height: 108px;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 24px 60px;
    border-bottom: 2px solid var(--color-white);

    & > div {
      width: 100%;
      max-width: 952px;
      height: 60px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > div {
        width: 100%;
        max-width: 648px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin-right: 16px;

        & > input {
          width: 100%;
          max-width: 574px;
          height: 60px;

          background-color: var(--color-white-two);
          border: 2px solid var(--color-white-two);
          border-radius: 4px;

          font-weight: 400;
          font-size: 18px;

          padding: 19px;
          margin-right: 9px;

          &:focus {
            border-color: var(--color-secondary);
          }

          &::placeholder {
            color: var(--color-placeholder);
          }
        }
      }
    }

    @media (max-width: 1024px) {
      height: 195px;
      padding: 0 16px;

      border-bottom: 0;

      & > div {
        height: 145px;

        flex-direction: column;

        & > div,
        input {
          margin: 0;
        }
      }
    }
  }

  & > div {
    padding: 35px 60px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    & > menu {
      width: 100%;
      max-width: 1600px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (max-width: 1560px) {
        justify-content: space-around;
      }
    }

    @media (max-width: 1100px) {
      padding: 30px 14px;
    }
  }
`;

export { Container };
