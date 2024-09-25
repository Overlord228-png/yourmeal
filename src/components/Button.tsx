import React from "react";
import { ButtonContainer } from "../styles/ButtonStyles";

interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: IButton) => {
  return (
    <ButtonContainer className={`button ${className}`} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
