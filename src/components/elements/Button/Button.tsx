import React from "react";
import { Button } from "react-bootstrap";

interface ButtonProps {
  link?: React.ReactNode;
  children: string;
  className: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "lg";
}

const ButtonElements: React.FC<ButtonProps> = (props) => {
  const { children, className, variant, size, onClick } = props;
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonElements;
