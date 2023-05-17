import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { BurgerMenu } from "../common/Header/BurgerMenu";
import { GlobalStyle } from "./GlobalStyle";
import { AboutUs } from "../features/AboutUs";
import { Contact } from "../features/Contact";
import { Main } from "../common/Main";
import { StyledSwitch } from "./styled";
import { Footer } from "../common/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
            <Header />
            <Main>
            <BurgerMenu/>
            <StyledSwitch>
              <Route path="/o-nas"><AboutUs/></Route>
              <Route path="/uslugi"></Route>
              <Route path="/minikoparka"></Route>
              <Route path="/realizacje"></Route>
              <Route path="/lokalizacja"></Route>
              <Route path="/kontakt"><Contact/></Route>
              <Route path="/">
                <Redirect to="/o-nas" /></Route>
            </StyledSwitch>
            </Main>
            <Footer/>
          </HashRouter >
      
    </>
  );
}

export default App;