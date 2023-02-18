import styled from "styled-components";

const Container = styled.div`
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

      display: flex;
      flex-direction: row;
      align-items: center;

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
    }
  }
`;

export { Container };
