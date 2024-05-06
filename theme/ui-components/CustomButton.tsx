"use client";
import { Button } from "@material-tailwind/react";
const ButtonComponent = ({ children, ...props }: any) => {
  return (
    <Button placeholder={"placeholder"} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
