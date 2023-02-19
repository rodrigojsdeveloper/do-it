import styled, { css } from "styled-components";

interface IButtonStyled {
  color: "primary" | "secondary" | "disable";
  size:
    | "signin"
    | "back"
    | "backMobile"
    | "modal"
    | "newTask"
    | "searchTask"
    | "miniButton"
    | "modalTwo"
    | "newTaskPrimary"
    | "notFound";
}

const Container = styled.button<IButtonStyled>`
  width: 100%;

  font-weight: 600;
  font-size: 16px;

  border-radius: 4px;
  border: 1.5px solid;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;
  color: var(--color-base-default);

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          background-color: var(--color-secondary);
          border-color: var(--color-secondary);

          :hover {
            background-color: var(--color-secondary-two);
            border-color: var(--color-secondary-two);
          }
        `;

      case "secondary":
        return css`
          background-color: var(--color-primary);
          border-color: var(--color-primary);

          :hover {
            background-color: var(--color-primary-two);
            border-color: var(--color-primary-two);
          }
        `;

      case "disable":
        return css`
          background-color: var(--color-grey);
          border-color: var(--color-grey);
          color: var(--color-placeholder);

          :hover {
            background-color: var(--color-grey-two);
            border-color: var(--color-grey-two);
            color: var(--color-text);
          }
        `;

      default:
        return false;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "signin":
        return css`
          height: 60px;
          max-width: 450px;
        `;

      case "back":
        return css`
          height: 68.37px;
          max-width: 84px;
        `

      case "backMobile":
        return css`
          height: 35.81px;
          max-width: 44px;
        `

      case "modal":
        return css`
          height: 60px;
          max-width: 388.33px;
        `;

      case "newTask":
        return css`
          height: 60px;
          max-width: 288px;
        `;

      case "searchTask":
        return css`
          height: 60px;
          max-width: 65px;
        `;

      case "miniButton":
        return css`
          height: 30px;
          max-width: 30px;
        `;

      case "modalTwo":
        return css`
          height: 60px;
          max-width: 420px;
        `;

      case "newTaskPrimary":
        return css`
          height: 50px;
          max-width: 253.6px;
        `;

      case "notFound":
        return css`
          height: 60px;
          max-width: 342px;
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
