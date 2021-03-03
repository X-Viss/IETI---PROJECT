
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm } from './form/components';
import { Travels } from './travel';
import { LoginForm } from './form/components';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/registro" ><RegisterForm /></Route>
          <Route exact path="/login" ><LoginForm /></Route>
          <Route exact path="/travelList" ><Travels /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;