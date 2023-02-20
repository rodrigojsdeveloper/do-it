import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 572px;
  height: 336px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 47px auto 0 auto;

  & > div {
    width: 100%;
    height: 105px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    & > h2 {
      font-size: 34px;
      line-height: 40px;
    }

    & > p {
      font-size: 24px;
      line-height: 30px;

      color: var(--color-placeholder);
    }

    & > h2,
    & > p {
      font-weight: 700;
    }

    @media (max-width: 768px) {
      & > h2 {
        font-size: 20px;
      }
    }
  }

  & > img {

    width: 100%;
    max-width: 456px;
  }

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export { Container };
