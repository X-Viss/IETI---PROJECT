import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterForm } from './form/components';
import { Travels } from './travel';
import { LoginForm } from './form/components';
import Main from './seleccionarClima/decoracionMain'
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;