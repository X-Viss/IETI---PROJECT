import React from 'react';
import {SeleccionarClima} from './SeleccionarClima';
import {SeleccionarViajero} from './seleccionarViajero';
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
        this.state = {viajero: [], clima: []}
        this.guardarViajero = this.guardarViajero.bind(this)
        this.guardarClima = this.guardarClima.bind(this)
    }

    guardarClima(data){
        this.setState({
            clima: data
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
                <SeleccionarViajero list={imgs} guardar={this.guardarViajero}/>
                <SeleccionarClima list={imgs2} guardar={this.guardarClima} />
            </div>
        );
    }
}

export default withStyles(styles)(Main);