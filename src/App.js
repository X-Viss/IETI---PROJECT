import './App.css';
import Inicio from "./inicio/Inicio";
import Lugares from "./lugares/lugares";
import Tiposviajes from "./tiposviajes/tiposviajes";
import Statisctics from "./statisctics/statisctics";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/inicio"><Inicio/></Route>
            <Route exact path="/lugares"><Lugares/></Route>
            <Route exact path="/tiposviajes"><Tiposviajes/></Route>
            <Route exact path="/statisctics"><Statisctics/></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;