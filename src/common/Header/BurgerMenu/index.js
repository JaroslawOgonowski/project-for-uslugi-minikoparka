import { useState } from "react";
import { BurgerButton, BurgerDiv, BurgerSpan, Item, NavList, StyledNavigation } from "./styled"

export const BurgerMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <>


      <nav >

        <BurgerButton >
          <BurgerDiv open={open} onClick={() => setOpen(!open)}>
            <BurgerSpan open={open} />
            <BurgerSpan open={open} />
            <BurgerSpan open={open} />
          </BurgerDiv>
        </BurgerButton>

        <NavList open={open}>
          <Item>O Nas</Item>
          <Item>Placeholder</Item>
          <Item>Placeholder</Item>
          <Item>Placeholder</Item>
          <Item>Kontakt</Item>
        </NavList>
      </nav>
    </>
  );
};