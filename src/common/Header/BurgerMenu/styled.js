import styled, { css } from "styled-components";

export const BurgerButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0 0 10px 0;
  text-decoration: none;
  position: relative;
  border: 3px solid rgba(252,156,0,1);;
  border-radius: 5px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const BurgerDiv = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 6px;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  
  ${({ open }) => open && css`

  `
  }
  
  &:focus {
    outline: none;
  }
  `;

export const BurgerSpan = styled.span`
  width: 75%;
  height: 4px;
  background: black;
  transition: all 0.3s linear;
  position: relative;

  
  :first-child {
      transform: ${({ open }) => open ? 'translateY(10px) rotate(-45deg);' : 'rotate(0)'}
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'translateY(-10px) rotate(45deg)' : 'rotate(0)'};
    }
`;