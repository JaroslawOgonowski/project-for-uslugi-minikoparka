import { Header } from "../common/Header";
import { BurgerMenu } from "../common/Header/BurgerMenu";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BurgerMenu/>
    </>
  );
}

export default App;