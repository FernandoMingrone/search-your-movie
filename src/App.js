import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Contact from "./scenes/Contact";
import AboutPractica from "./scenes/AboutUs";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <AboutPractica />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
