import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 427px;
  height: 147px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 4px;
  border: 1px solid var(--color-white);
  background: var(--color-base-default);
  box-shadow: 0px 0px 40px -20px var(--shadow);

  position: absolute;
  top: 0;
  right: 0;

  margin-top: -23px;
  margin-right: 60px;

  & > div:nth-child(1) {
    width: 100%;
    padding: 15px 19px;
    border-bottom: 2px solid var(--color-white);

    & > h2 {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;

      color: var(--color-text);
    }
  }

  & > div:nth-child(2) {
    padding: 17px 19px 19px 19px;

    display: flex;
    flex-direction: row;
    align-items: center;

    & > figure {
      width: 60px;
      height: 60px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 4px;
      background-color: var(--color-error);
    }

    & > div {
      height: 49px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      padding-left: 15px;

      & > h2 {
        font-weight: 700;
        font-size: 20px;
      }

      & > p {
        font-weight: 400;
        font-size: 14px;

        color: var(--color-placeholder);
      }

      & > h2,
      & > p {
        line-height: 24px;
      }
    }
  }
`;

export { Container };
