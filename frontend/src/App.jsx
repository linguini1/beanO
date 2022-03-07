import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/collection" exact component={Store} />
      <Route path="/create" exact component={Create} />
    </Router>
  );
}

export default App;
