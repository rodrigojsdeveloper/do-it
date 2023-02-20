import { Container } from "./style";
import React, { FC } from "react";

interface IModalBackground {
  children: React.ReactNode;
}

const ModalBackground: FC<IModalBackground> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
