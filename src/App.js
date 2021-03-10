import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm } from './form/components';
import { Travels } from './travel';
import { LoginForm } from './form/components';
import { NotFoundForm } from './form/404';
import Main from './seleccionarClima/decoracionMain'
import { EditUserForm } from './form/edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/registro" ><RegisterForm /></Route>
          <Route exact path="/login" ><LoginForm /></Route>
          <Route exact path="/travelList" ><Travels /></Route>
          <Route exact path="/categorias"><Main /></Route>
          <Route exact path="/editUser"><EditUserForm /></Route>
          <Route><NotFoundForm/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;