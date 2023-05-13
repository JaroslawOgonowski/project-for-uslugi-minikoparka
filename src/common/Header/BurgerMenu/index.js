import { useState } from "react";
import { BurgerButton, BurgerDiv, BurgerSpan, Item, Label, NavList, StyledNavigation } from "./styled"

export const BurgerMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav >
        <BurgerButton >
          <BurgerDiv
            open={open}
            onClick={() => setOpen(!open)
            }>
            <BurgerSpan open={open} />
            <BurgerSpan open={open} />
            <BurgerSpan open={open} />
          </BurgerDiv>
        </BurgerButton>

        <NavList open={open}>
          <Item onClick={(window.innerWidth < 767) ? () => setOpen(!open) : null}><Label>O Nas</Label></Item>
          <Item onClick={(window.innerWidth < 767) ? () => setOpen(!open) : null}><Label>Usługi</Label></Item>
          <Item onClick={(window.innerWidth < 767) ? () => setOpen(!open) : null}><Label>Minikoparka</Label></Item>
          <Item onClick={(window.innerWidth < 767) ? () => setOpen(!open) : null}><Label>Realizacje</Label></Item>
          <Item onClick={(window.innerWidth < 767) ? () => setOpen(!open) : null}><Label>Lokalizacja</Label></Item>
          <Item onClick={(window.innerWidth < 767) ? () => setOpen(!open) : null}><Label>Kontakt</Label></Item>
        </NavList>
      </nav>
    </>
  );
};