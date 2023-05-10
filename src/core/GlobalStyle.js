import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background-color: #0a0909;
  color: #ede6e6;
};

*, ::after, ::before {
  box-sizing: inherit;
};
`