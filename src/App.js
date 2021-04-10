import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm } from './form/components';
import { Travels } from './travel';
import { LoginForm } from './form/components';
import { NotFoundForm } from './form/404';
import Main from './seleccionarClima/decoracionMain'
import { EditUserForm } from './form/edit';
import { useEffect } from 'react';
import { useState } from 'react';
import ProtectedRoute from './tests/common/PrivateRoute';
import Inicio from "./inicio/Inicio";
import Lugares from "./lugares/lugares";
import Tiposviajes from "./tiposviajes/tiposviajes";
import Statisctics from "./statisctics/statisctics";

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn")=="true");
  
  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");
    if (logged) {
      console.log("DONE")
      setLoggedIn(logged == "true");
      console.log(loggedIn)
    }
  });

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
          <ProtectedRoute exact isAuthenticated={loggedIn} path="/travelList" component={() => (<Travels/>)} />
          <ProtectedRoute exact isAuthenticated={loggedIn} path="/categorias" component={() => (<Main/>)} />
          <ProtectedRoute exact isAuthenticated={loggedIn} path="/editUser" component={() => (<EditUserForm />)} />
          <Route><NotFoundForm /></Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;