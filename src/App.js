import './App.css';
import Inicio from "./inicio/Inicio";
import Lugares from "./lugares/lugares";
import Tiposviajes from "./tiposviajes/tiposviajes";
import Statisctics from "./statisctics/statisctics";
import {BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";
import {LoginForm, RegisterForm} from './form/components';
import {NotFoundForm} from './form/404';
import Main from './seleccionarClima/decoracionMain'
import QuestList from './components/QuestList'
import {Travels} from "./travel";
import ProtectedRoute from './common/ProtectedRoute';
import {EditUserForm} from "./form/edit";
import {useState} from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(window.sessionStorage.getItem("token")!=null);
    /* istanbul ignore next */
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"><Inicio/></Route>
                    <Route exact path="/lugares"><Lugares/></Route>
                    <Route exact path="/tiposviajes"><Tiposviajes/></Route>
                    <Route exact path="/statisctics"><Statisctics/></Route>
                    <Route exact path="/registro"><RegisterForm/></Route>
                    <Route exact path="/login"><LoginForm/></Route>
                    <Route exact path="/create"><Main/></Route>
                    <Route exact path="/listQuestions"><QuestList/></Route>
                    <Route path={"/lugares/:lugar"} children={<Child/>}/>
                    <Route path={"/tiposviajes/:viaje"} children={<Child/>}/>
                    <ProtectedRoute exact isAuthenticated={loggedIn} path="/travelList" component={() => (<Travels/>)} />
                    <ProtectedRoute exact isAuthenticated={loggedIn} path="/categorias" component={() => (<Main/>)} />
                    <ProtectedRoute exact isAuthenticated={loggedIn} path="/editUser" component={() => (<EditUserForm />)} />

                    <Route><NotFoundForm/></Route>
                </Switch>
            </Router>
        </div>
    );
}


/* istanbul ignore next */
function Child() {
    let {lugar, viaje} = useParams();
    if (lugar) {
        return (
            <Lugares title={lugar}/>
        );
    } else if (viaje) {
        return (
            <Tiposviajes title={viaje}/>
        );
    }
    return "";
}
export default App;