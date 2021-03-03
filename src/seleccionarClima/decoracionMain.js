import React from 'react';
import {SeleccionarClima} from './SeleccionarClima';
import {SeleccionarViajero} from './seleccionarViajero';
import {SeleccionarCategoria} from './SeleccionarPorCategoria';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        verticalAlign: "baseline",
        position: "relative",
        padding: theme.spacing(2),
        height: "100%"
    },
    down: {
        height: "70%",
    },
    user: {
        width: "30%",
    },
    travelListGrid: {
        width: "70%"
    },
    travelList: {
        width: "inherit",
    },

    upperDiv: {

    }
});

class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {viajero: [], clima: [], accesorios: [], ropa: [],
                      aseo: [], medicina: [], aLaMano: [], compras: [], varios: []}
        this.guardarViajero = this.guardarViajero.bind(this)
        this.guardarClima = this.guardarClima.bind(this)
        this.guardarAccesorios = this.guardarAccesorios.bind(this)
        this.guardarRopa = this.guardarRopa.bind(this)
        this.guardarAseo = this.guardarAseo.bind(this)
        this.guardarMedicina = this.guardarMedicina.bind(this)
        this.guardarALaMano = this.guardarALaMano.bind(this)
        this.guardarCompras = this.guardarCompras.bind(this)
        this.guardarVarios = this.guardarVarios.bind(this)
    }

    guardarALaMano(data){
        this.setState({
            aLaMano: data
        })
    }

    guardarAccesorios(list){
        this.setState({
            accesorios: list
        })
    }

    guardarAseo(data){
        this.setState({
            aseo: data
        })
    }
    guardarClima(data){
        this.setState({
            clima: data
        })
    }

    guardarCompras(data){
        this.setState({
            compras: data
        })
    }

    guardarMedicina(data){
        this.setState({
            medicina: data
        })
    }

    guardarRopa(data){
        this.setState({
            ropa: data
        })
    }

    guardarVarios(data){
        this.setState({
            varios: data
        })
    }

    guardarViajero(data){
        this.setState({
            viajero: data
        })
    }
    render() {
        let imgs = [
            {
                path: 'https://i.ibb.co/6JRjSwT/mascotas.jpg',
                name: "Viaje con mascotas",
                check: false,
            },
            {
                path: 'https://i.ibb.co/dKFjmSv/mochilero.jpg',
                name: "Viaje como Mochilero",
                check: false,
            },
            {
                path: 'https://i.ibb.co/3mJhzz1/parejas.jpg',
                name: "Viaje en pareja",
                check: false,

            },
            {
                path: 'https://i.ibb.co/vdJ8ZQc/turistas.jpg',
                name: "Viaje como turista",
                check: false,
            },
            {
                path: 'https://i.ibb.co/88ckWqL/viaje-De-Negocios.jpg',
                name: "Viaje de trabajo",
                check: false,
            }

        ];

        let imgs2 = [
            {
                path : 'https://i.ibb.co/ssC1Wz1/KONICA-MINOLTA-DIGITAL-CAMERA.jpg',
                name : "Invierno",
                check: false

            },
            {
                path: 'https://i.ibb.co/XsY2PSt/oto-o.jpg',
                name: "Otoño",
                check: false
            },
            {
                path: 'https://i.ibb.co/rQ6K4Pp/primavera.jpg',
                name: "Primavera",
                check: false
            
            },
            {
                path: 'https://i.ibb.co/8BHqHSC/verano.jpg',
                name: "Verano",
                check: false
            }
        ];
        const { classes } = this.props;

        return (
            <div className={classes.root} >
                <SeleccionarViajero list={imgs} guardar={this.guardarViajero} id="checkBoxIdViajero"/>
                <h1>Escoge el clima</h1>
                <SeleccionarClima list={imgs2} guardar={this.guardarClima} id="checkBoxId" />
                <h1>Accesorios</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarAccesorios} id="accesorios" />
                <h1>A La Mano</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarALaMano} id="mano" />
                <h1>Aseo</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarAseo} id="aseo" />
                <h1>Compras</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarCompras} id="compras" />
                <h1>Medicina</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarMedicina} id="medicina" />
                <h1>Ropa</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarRopa} id="ropa" />
                <h1>Varios</h1>
                <SeleccionarCategoria list={imgs} guardar={this.guardarVarios} id="varios" />
                {console.log(this.state.aLaMano), console.log(this.state.accesorios),
                console.log(this.state.aseo), console.log(this.state.clima), console.log(this.state.compras), 
                console.log(this.state.medicina), console.log(this.state.ropa), 
                console.log(this.state.ropa), console.log(this.state.varios), console.log(this.state.viajero)
                }
            </div>
        );
    }
}

export default withStyles(styles)(Main);
