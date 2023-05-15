import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { BurgerMenu } from "../common/Header/BurgerMenu";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
            <Header />
            <BurgerMenu/>
            <Switch>
              <Route path="/o-nas"></Route>
              <Route path="/uslugi"></Route>
              <Route path="/minikoparka"></Route>
              <Route path="/realizacje"></Route>
              <Route path="/lokalizacja"></Route>
              <Route path="/kontakt"></Route>
              <Route path="/">
                <Redirect to="/o-nas" /></Route>
            </Switch>
          </HashRouter >
      
    </>
  );
}

export default App;