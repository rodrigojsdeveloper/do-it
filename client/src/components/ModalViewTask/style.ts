import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  height: 488px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  border: 1px solid var(--color-white-three);
  background-color: var(--color-base-default);
  box-shadow: 0px 0px 20px -10px var(--shadow);

  padding: 25px 20.5px 23px 20.5px;

  & > header {
    width: 100%;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 28px;

    & > div:nth-child(1) {
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

    & > div:nth-child(2) {
      width: 100%;
      max-width: 110.91px;
      height: 30px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  & > div {
    width: 100%;
    max-width: 403.36px;

    background: linear-gradient(
      180deg,
      var(--shadow-three) 0%,
      var(--color-base-default) 100%
    );

    & > div:nth-child(1) {
      width: 100%;
      height: 320px;
      overflow: auto;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      &::-webkit-scrollbar {
        width: 5.04px;
      }

      &::-webkit-scrollbar-track {
        display: none;
      }

      &::-webkit-scrollbar-thumb {
        width: 5.04px;
        height: 10px;

        background-color: var(--color-white-four);
        border-radius: 4px;
      }

      & > h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        height: 60px;

        @media (max-width: 425px) {
          font-size: 20px;
        }
      }

      & > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        height: 240px;

        color: var(--color-text);
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      height: 41px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      margin-top: 24px;

      & > div {
        height: 9px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        & > div {
          width: 25.21px;
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
  }
`;

export { Container };
