import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.css";
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={classes.myButton} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
