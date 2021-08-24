import "./App.css";
import Landingspagina from "./Landingspagina";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bedankt from "./Bedankt";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/bedankt">
            <Helmet>
              <title>Ultimi Vineti - Bedankt</title>
            </Helmet>
            <Bedankt />
          </Route>
          <Route path="/">
            <Helmet>
              <title>Ultimi Vineti - Aanmelden</title>
            </Helmet>
            <Landingspagina />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
