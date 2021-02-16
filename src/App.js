import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <NavTabs />
      <Switch>
        <Route exact path="/about" >
          <About />
        </Route>
        <Route exact path="/" >
          <About />
        </Route>
        <Route exact path="/discover" >
          <Discover />
        </Route>
        <Route path="/search" >
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
