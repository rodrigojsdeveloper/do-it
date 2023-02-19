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

      border-radius: 4px;
      border: 2px solid var(--color-white-two);
      background-color: var(--color-white-two);

      padding: 29px 17px;

      &:hover {
        border-color: var(--color-secondary);
      }

      ${({ isErroded }) =>
        isErroded &&
        css`
          border-color: var(--color-error);
        `}

      & > img {
        width: 16px;
        height: 20px;

        margin-right: 10px;
      }

      & > input {
        height: 20px;
        border: none;

        font-weight: 400;
        font-size: 18px;

        background-color: var(--transparent);

        &::placeholder {
          color: var(--color-placeholder);
        }
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
