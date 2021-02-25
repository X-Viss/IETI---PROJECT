import logo from './logo.svg';
import './App.css';
import {SeleccionarClima} from './seleccionarClima/SeleccionarClima';
import {SeleccionarViajero} from './seleccionarClima/seleccionarViajero';

function App() {
  return (
    <div>
      <SeleccionarViajero/>
      <SeleccionarClima/>
    </div>
  );
}

export default App;
