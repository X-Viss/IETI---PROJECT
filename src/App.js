import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Travels } from './travel';
import { LoginForm } from './form/components';
import { NotFoundForm } from './form/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" ><LoginForm /></Route>
          <Route exact path="/travelList" ><Travels /></Route>
          <Route exact path="/404" ><NotFoundForm /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;