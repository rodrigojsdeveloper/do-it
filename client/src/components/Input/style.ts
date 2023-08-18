import styled, { css } from "styled-components";

interface InputPropsStyled {
  isErroded: boolean;
}

const Container = styled.div<InputPropsStyled>`
  width: 100%;
  max-width: 450px;
  height: 116px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > label {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: var(--color-text);
  }

  & > div {
    width: 100%;
    height: 88px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
      width: 100%;
      height: 60px;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      transition: 0.5s;

      border-radius: 4px;
      border: 2px solid var(--color-white-two);
      background-color: var(--color-white-two);

      padding: 17px;

      ${({ isErroded }) =>
        isErroded &&
        css`
          border-color: var(--color-error);
        `}

      & > img {
        width: 16px;
        height: 20px;

        margin-right: 17px;
      }

      & > input {
        width: 100%;
        height: 100%;

        border: none;

        font-weight: 400;
        font-size: 18px;

        background-color: var(--color-white-two);

        &::placeholder {
          color: var(--color-placeholder);
        }

        &:focus {
          border-color: var(--color-secondary);
        }
      }
    }

    & > div:focus-within {
      border-color: var(--color-secondary);
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;

      color: var(--color-placeholder);

      ${({ isErroded }) =>
        isErroded &&
        css`
          color: var(--color-error);
        `}
    }
  }
`;

export { Container };
