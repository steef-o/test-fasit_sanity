import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import WikiItem from "./pages/WikiItem";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Wiki} path="/wiki" />
        <Route component={WikiItem} path="/wiki/:slug" />
        <Route component={Error404} path="/error-404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
