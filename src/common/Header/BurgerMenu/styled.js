import { Link } from "react-router-dom";
import styled from "styled-components";

export const BurgerButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0 0 10px 0;
  text-decoration: none;
  position: relative;
  border: 3px solid rgba(252,156,0,1);
  border-radius: 5px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-content: center;
  transition: 0.5s;

  &:hover{
    -webkit-box-shadow: 0px 0px 6px 2px rgba(202, 192, 192, 1);
    -moz-box-shadow: 0px 0px 6px 2px rgba(202, 192, 192, 1);
    box-shadow: 0px 0px 6px 2px rgba(202, 192, 192, 1);
  }

  @media (min-width: 1700px) {
    top: 0.5vw;
    left: 0.5vw;
    width: 2.8vw;
    height: 2.8vw;
  }
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
  background: #2a2323;;
  border: none;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }

  @media (min-width: 1700px) {
    gap: 0.3vw;
  }
  `;

export const BurgerSpan = styled.span`
  width: 75%;
  height: 4px;
  background: white;
  transition: all 0.3s linear;
  position: relative;

  
  :first-child {
    transform: ${({ open }) => open ? 'translateY(10px) rotate(-45deg);' : 'rotate(0)'};
    
    @media (min-width: 1700px) {
      transform: ${({ open }) => open ? 'translateY(0.6vw) rotate(-45deg);' : 'rotate(0)'};
    }  
  }

  :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};

    @media (min-width: 1700px) {
      transform: ${({ open }) => open ? 'translateY(1vw) rotate(-45deg);' : 'rotate(0)'};
    } 
    }

  :nth-child(3) {
    transform: ${({ open }) => open ? 'translateY(-10px) rotate(45deg)' : 'rotate(0)'};
    
    @media (min-width: 1700px) {
      transform: ${({ open }) => open ? 'translateY(-0.5vw) rotate(45deg);' : 'rotate(0)'};
    } 
  }

    @media (min-width: 1700px) {
      height: 0.3vw;
  }
`;

export const NavList = styled.nav`
  padding-top: 60px;
  margin-top: -50px;
  transition: 0.3s linear;
  background-color: #2a2323;
  color: black;
  width: 280px;
  height: 480px;
  transform: ${({ open }) => open ? `translateX(0)` : `translateX(-100000000px);    height:0; 
    width:0;`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  list-style: none;
  -webkit-box-shadow: 0px 0px 6px 2px rgba(49, 46, 46, 1);
  -moz-box-shadow: 0px 0px 6px 2px rgba(49, 46, 46, 1);
  box-shadow: 0px 0px 6px 2px rgba(49, 46, 46, 1);

  @media (max-width: 767px) {
  width: 100%;
  transform: ${({ open }) => open ? `translateX(0)` : `translateX(-10000px); `}
  }

  @media (min-width: 1700px) {
    width: 17vw;
    height: 30vw;
    gap: 0.1vw;
    padding-top: 3.8vw;
    margin-top: -20%;
    transform: ${({ open }) => open ? `translateX(0)` : `translateX(-200vw);    height:0; 
    width:0;`};
  }

  @media (min-width: 2200px) {
    margin-top: -18%;
  }

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
`;

export const Item = styled.li`
  cursor: pointer;
  width: 100%;
  font-family: 'Saira', sans-serif;
  font-size: 26px;
  padding: 10px 0;

  &:hover{
    background-color: rgba(252,156,0,1);
    color: black;
  };

  @media (max-width: 767px) {
  text-align: center;
  };

  @media (min-width: 1700px) {
    font-size: 1.8vw;
    padding: 1vw 0;
  }
`;

export const Label = styled.div`
  width: calc(100% - 16px);
  padding-left: 16px;
  transition: 0.5s;

  @media (min-width: 767px) {
    &:hover{
      width: calc(100% - 50px);
      padding-left: 50px;
    };
  };

  @media (max-width: 767px) {
      padding-left: 0;
      width: 100%;
  };
`;