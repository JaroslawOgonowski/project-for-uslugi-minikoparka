import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Saira', sans-serif;
  position: relative;
  margin: 0;
  padding: 0;
  background-color: #141311;
  color: #ede6e6;
  overflow-x: hidden;
};

*, ::after, ::before {
  box-sizing: inherit;
};
`