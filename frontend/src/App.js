import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">Klickrent</header>
      </div>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
