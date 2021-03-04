import React from 'react';
import {SeleccionarClima} from './SeleccionarClima';
import {SeleccionarViajero} from './seleccionarViajero';
import {SeleccionarDestino} from './SeleccionarDestino'
import { withStyles } from '@material-ui/core/styles';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

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
        this.state = {viajero: [], clima: [], pais: ""}
        this.guardarViajero = this.guardarViajero.bind(this)
        this.guardarDestino = this.guardarDestino.bind(this)
        this.guardarClima = this.guardarClima.bind(this)
    }

    guardarViajero(data){
        this.setState({
            viajero: data
        })
    }

    guardarDestino(data){
        this.setState({
            pais: data
        })
    }

    guardarClima(data){
        this.setState({
            clima: data
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

        let data = [
            { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' }
        ]

        const { classes } = this.props;

        return (
            <div className={classes.root} >
                <SeleccionarViajero list={imgs} guardar={this.guardarViajero} id="checkBoxIdViajero"/>
                <SeleccionarDestino pais={data} guardar={this.guardarDestino} />
                <h1>Escoge el clima</h1>
                <SeleccionarClima list={imgs2} guardar={this.guardarClima} id="checkBoxId" />                
            </div>
        );
    }
}

export default withStyles(styles)(Main);
