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
      align-items: center;

      & > img {
        width: 16px;
        height: 20px;

        margin-left: 17px;
        position: fixed;
        z-index: 2000;
      }

      & > input {
        width: 100%;
        height: 60px;
        border: none;

        font-weight: 400;
        font-size: 18px;

        padding: 17px 17px 17px 39px;
        transition: 0.5s;

        border-radius: 4px;
        border: 2px solid var(--color-white-two);
        background-color: var(--color-white-two);

        &::placeholder {
          color: var(--color-placeholder);
        }

        &:focus {
          border-color: var(--color-secondary);
        }

        ${({ isErroded }) =>
          isErroded &&
          css`
            border-color: var(--color-error);
          `}
      }
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
