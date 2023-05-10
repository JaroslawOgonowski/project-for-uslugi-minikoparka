import { useState } from "react";
import { BurgerButton, BurgerDiv, BurgerSpan } from "./styled"

export const BurgerMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <BurgerButton >
      <BurgerDiv open={open} onClick={() => setOpen(!open)}>
        <BurgerSpan open={open} />
        <BurgerSpan open={open} />
        <BurgerSpan open={open} />
      </BurgerDiv>
    </BurgerButton>
  );
};