import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick: () => void;
};

export const Button = ({ onClick }: ButtonProps) => {
  return <MuiButton onClick={onClick}>Click me</MuiButton>;
};
