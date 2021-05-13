import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Form } from "./Form";
import { Home } from "./Home";
import { Stories } from "./Stories";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/tu-historia">
            <Form />
          </Route>
          <Route path="/historias">
            <Stories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
