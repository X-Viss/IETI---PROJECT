import './App.css';
import Inicio from "./inicio/Inicio";
import Lugares from "./lugares/lugares";
import Tiposviajes from "./tiposviajes/tiposviajes";
import Statisctics from "./statisctics/statisctics";
import {BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";
import {LoginForm, RegisterForm} from './form/components';
import {Travels} from './travel';
import {NotFoundForm} from './form/404';
import Main from './seleccionarClima/decoracionMain'
import {EditUserForm} from './form/edit';
import TravelCard from "./travel/TravelCard";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/inicio"><Inicio/></Route>
                    <Route exact path="/lugares"><Lugares/></Route>
                    <Route exact path="/tiposviajes"><Tiposviajes/></Route>
                    <Route exact path="/statisctics"><Statisctics/></Route>
                    <Route exact path="/registro"><RegisterForm/></Route>
                    <Route exact path="/login"><LoginForm/></Route>
                    <Route exact path="/travelList"><Travels/></Route>
                    <Route exact path="/categorias"><Main/></Route>
                    <Route exact path="/editUser"><EditUserForm/></Route>
                    <Route exact path="/editUser"><TravelCard/></Route>
                    <Route path={"/lugares/:lugar"} children={<Child />}/>
                    <Route><NotFoundForm/></Route>
                </Switch>
            </Router>
        </div>
    );
}

function Child() {
    let {lugar} = useParams();

    return (
        <Lugares title={lugar} />
    );
}

export default App;