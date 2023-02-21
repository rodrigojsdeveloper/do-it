import { Container } from "./style";
import React, { FC } from "react";

interface IModalBackgroundHeader {
  children: React.ReactNode;
}

const ModalBackgroundHeader: FC<IModalBackgroundHeader> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ModalBackgroundHeader };
