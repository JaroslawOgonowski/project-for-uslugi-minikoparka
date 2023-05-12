import { useState } from "react";
import { BurgerButton, BurgerDiv, BurgerSpan, Item, Label, NavList, StyledNavigation } from "./styled"

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
          <Item><Label>O Nas</Label></Item>
          <Item><Label>Usługi</Label></Item>
          <Item><Label>Minikoparka</Label></Item>
          <Item><Label>Realizacje</Label></Item>
          <Item><Label>Lokalizacja</Label></Item>
          <Item><Label>Kontakt</Label></Item>
        </NavList>
      </nav>
    </>
  );
};