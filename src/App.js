import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { RegisterForm } from './form/components';
import { Travels } from './travel';
import { LoginForm } from './form/components';
import { NotFoundForm } from './form/404';
import Main from './seleccionarClima/decoracionMain'
import { EditUserForm } from './form/edit';
import { useEffect } from 'react';
import { useState } from 'react';
import ProtectedRoute from './tests/common/PrivateRoute';


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