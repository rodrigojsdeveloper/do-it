import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  color: "primary" | "secondary" | "disable";
  size:
    | "signin"
    | "modal"
    | "newTask"
    | "searchTask"
    | "miniButton"
    | "modalTwo"
    | "newTaskPrimary"
    | "notFound";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}

const Button = ({
  children,
  color,
  size,
  onClick,
  disabled,
  type,
}: IButton) => {
  return (
    <Container
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </Container>
  );
};

export { Button };
