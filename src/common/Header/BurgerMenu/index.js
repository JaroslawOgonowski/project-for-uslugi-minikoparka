import { useState } from "react";
import { BurgerButton, BurgerDiv, BurgerSpan, Item, Label, NavList, StyledLink } from "./styled"

export const BurgerMenu = () => {

  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    if (window.innerWidth < 767) { setOpen(!open) }
    else return;
  }

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
          <StyledLink to="/o-nas"><Item onClick={() => changeOpen()}><Label>O Nas</Label></Item></StyledLink>
          <StyledLink to="/uslugi"><Item onClick={() => changeOpen()}><Label>Usługi</Label></Item></StyledLink>
          <StyledLink to="/minikoparka"><Item onClick={() => changeOpen()}><Label>Minikoparka</Label></Item></StyledLink>
          <StyledLink to="/realizacje"><Item onClick={() => changeOpen()}><Label>Realizacje</Label></Item></StyledLink>
          <StyledLink to="/lokalizacja"><Item onClick={() => changeOpen()}><Label>Lokalizacja</Label></Item></StyledLink>
          <StyledLink to="/kontakt"><Item onClick={() => changeOpen()}><Label>Kontakt</Label></Item></StyledLink>
        </NavList>
      </nav>
    </>
  );
};