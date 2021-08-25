import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./components/Start";
import Level from "./components/Level";
import Question1 from "./components/Level1/Question1";
import Question2 from "./components/Level1/Question2";
import Question_1 from "./components/Level2/Question_1";
import Question_2 from "./components/Level2/Question_2";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/level" component={Level} />
          <Route path="/level1/question1" component={Question1} />
          <Route path="/level1/question2" component={Question2} />
          <Route path="/level2/question1" component={Question_1} />
          <Route path="/level2/question2" component={Question_2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
