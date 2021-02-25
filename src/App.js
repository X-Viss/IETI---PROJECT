import logo from './logo.svg';
import './App.css';
import {SeleccionarClima} from './seleccionarClima/SeleccionarClima';
import {SeleccionarViajero} from './seleccionarClima/seleccionarViajero';
import {SeleccionarCategoria} from './seleccionarClima/SeleccionarPorCategoria'

function App() {
  let imgs = [
    {
        path : 'https://i.ibb.co/6JRjSwT/mascotas.jpg',
        name : "Viaje con mascotas"

    },
    {
        path: 'https://i.ibb.co/dKFjmSv/mochilero.jpg',
        name: "Viaje como Mochilero"
    },
    {
        path: 'https://i.ibb.co/3mJhzz1/parejas.jpg',
        name: "Viaje en pareja"
    
    },
    {
        path: 'https://i.ibb.co/vdJ8ZQc/turistas.jpg',
        name: "Viaje como turista"
    },
    {
        path: 'https://i.ibb.co/88ckWqL/viaje-De-Negocios.jpg',
        name: "Viaje de trabajo"
    }

];

  return (
    <div>
      <SeleccionarViajero/>
      <SeleccionarClima/><br/>
      <h1>Accesorios</h1>
      <SeleccionarCategoria list={imgs}/>
      <h1>Ropa</h1>
      <SeleccionarCategoria list={imgs}/>
      <h1>Aseo</h1>
      <SeleccionarCategoria list={imgs}/>
      <h1>Medicina</h1>
      <SeleccionarCategoria list={imgs}/>
      <h1>A la mano</h1>
      <SeleccionarCategoria list={imgs}/>
      <h1>Compras</h1>
      <SeleccionarCategoria list={imgs}/>
      <h1>Varios</h1>
      <SeleccionarCategoria list={imgs}/>
    </div>
  );
}

export default App;
