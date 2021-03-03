import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Travels } from './travel';
import { LoginForm } from './form/components';

const LoginView = () => (
  <LoginForm />
);

const TravelListView = () => (
  <Travels />
);

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/travelList" component={TravelListView} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;