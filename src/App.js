import './App.css';
import Inicio from "./inicio/Inicio";
import Lugares from "./lugares/lugares";
import Tiposviajes from "./tiposviajes/tiposviajes";
import Statisctics from "./statisctics/statisctics";
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
          <Route exact path="/inicio"><Inicio/></Route>
          <Route exact path="/lugares"><Lugares/></Route>
          <Route exact path="/tiposviajes"><Tiposviajes/></Route>
          <Route exact path="/statisctics"><Statisctics/></Route>
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