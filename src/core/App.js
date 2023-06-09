import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { BurgerMenu } from "../common/Header/BurgerMenu";
import { GlobalStyle } from "./GlobalStyle";
import { AboutUs } from "../features/AboutUs";
import { Contact } from "../features/Contact";
import { Main } from "../common/Main";
import { Footer } from "../common/Footer";
import { Services } from "../features/Services";
import { Realization } from "../features/Realization";
import { Location } from "../features/Location";
import { Excavator } from "../features/Excavator";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Main>
          <BurgerMenu />
          <Switch>
            <Route path="/o-nas"><AboutUs /></Route>
            <Route path="/uslugi"><Services /></Route>
            <Route path="/minikoparka"><Excavator/></Route>
            <Route path="/realizacje"><Realization /></Route>
            <Route path="/lokalizacja"><Location /></Route>
            <Route path="/kontakt"><Contact /></Route>
            <Route path="/">
              <Redirect to="/o-nas" /></Route>
          </Switch>
        </Main> 
        <Footer />
      </HashRouter >
    </>
  );
}

export default App;