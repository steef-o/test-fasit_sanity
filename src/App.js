import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import WikiItem from "./pages/WikiItem";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={WikiItem} path="/wiki/:slug" />
        <Route component={Wiki} path="/wiki" />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
