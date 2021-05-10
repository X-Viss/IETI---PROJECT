import React from 'react';
import { SeleccionarClima } from './SeleccionarClima';
import { SeleccionarViajero } from './seleccionarViajero';
import { SeleccionarDestino } from './SeleccionarDestino'
import { SeleccionarCategoria } from './SeleccionarPorCategoria'
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { post, put } from '../requests/axiosRequests.js';
import { countryList, weatherListImages, rolListImages } from './Ui';
import {TituloHora} from './TituloHora';
import OptionsBoard from '../common/OptionsBoard';
import { Grid } from '@material-ui/core';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const styles = (theme) => ({
    root: {
        verticalAlign: "baseline",
        position: "relative",
        padding: theme.spacing(3),
        height: "100%",
        width: '100%',
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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: 'black'
    },
    upperGrid:{
        height: "15vh",
        backgroundColor: "#222A4F",
    }
});

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "", viajero: [], clima: [], pais: "", accesorios: [], ropa: [], titulo: "", hora: "",
            aseo: [], medicina: [], aLaMano: [], compras: [], varios: [], accesoriesList: [],
            cleannessList: [], clothesList: [], healthList: [], onHandList: []
        }
        this.guardarViajero = this.guardarViajero.bind(this)
        this.guardarClima = this.guardarClima.bind(this)
        this.guardarDestino = this.guardarDestino.bind(this)
        this.guardarAccesorios = this.guardarAccesorios.bind(this)
        this.guardarRopa = this.guardarRopa.bind(this)
        this.guardarAseo = this.guardarAseo.bind(this)
        this.guardarMedicina = this.guardarMedicina.bind(this)
        this.guardarALaMano = this.guardarALaMano.bind(this)
        this.guardarCompras = this.guardarCompras.bind(this)
        this.guardarVarios = this.guardarVarios.bind(this)
        this.guardarTituloHora = this.guardarTituloHora.bind(this)
    }

    guardarALaMano(data) {
        this.setState({
            aLaMano: data
        })
        put('api/create/category/onhand?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarAccesorios(data) {
        this.setState({
            accesorios: data
        })
        console.log("ome llegue aca ome ave maria ome")
        console.log(data)
        put('api/create/category/accessories?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarAseo(data) {
        this.setState({
            aseo: data
        })
        put('api/create/category/cleanliness?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarClima(data) {
        this.setState({
            clima: data
        })
        /* istanbul ignore next */
        put('api/create/weather?id=' + this.state.id, data)
            .then(res => {
                console.log(res);
                var accesories = []
                var cleanness = []
                var clothes = []
                var health = []
                var onHand = []

                res.accesoriesList.forEach((element)=> {
                    accesories.push({
                        path: 'https://i.ibb.co/XLqTpvs/fondo.jpg',
                        name: element,
                        check: false,
                    })
                    this.setState({accesoriesList: accesories});  
                })
                res.cleannessList.forEach((element)=> {
                    cleanness.push({
                        path: 'https://i.ibb.co/XLqTpvs/fondo.jpg',
                        name: element,
                        check: false,
                    })
                    this.setState({ cleannessList: cleanness });
                })
                res.clothesList.forEach((element)=> {
                    clothes.push({
                        path: 'https://i.ibb.co/XLqTpvs/fondo.jpg',
                        name: element,
                        check: false,
                    })
                    this.setState({ clothesList: clothes });
                })
                res.healthList.forEach((element)=> {
                    health.push({
                        path: 'https://i.ibb.co/XLqTpvs/fondo.jpg',
                        name: element,
                        check: false,
                    })
                    this.setState({ healthList: health });
                })
                res.onHandList.forEach((element) => {
                    onHand.push({
                        path: 'https://i.ibb.co/XLqTpvs/fondo.jpg',
                        name: element,
                        check: false,
                    })
                    this.setState({ onHandList: onHand });
                })
                alert("Guardado con exito")
            })
    }

    guardarCompras(data) {
        this.setState({
            compras: data
        })
        put('api/create/category/shopping?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarMedicina(data) {
        this.setState({
            medicina: data
        })
        put('api/create/category/medicine?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarDestino(data) {
        this.setState({
            pais: data
        })
        put('api/create/destiny?id='+this.state.id, { country: data }).then(() =>{alert("Guardado con exito")})
    }

    guardarRopa(data) {
        this.setState({
            ropa: data
        })
        put('api/create/category/clothes?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarVarios(data) {
        this.setState({
            varios: data
        })
        put('api/create/category/several?id=' + this.state.id, data).then(() =>{alert("Guardado con exito")})
    }

    guardarViajero(data) {
        this.setState({
            viajero: data
        })
        post('api/create/rol?id='+this.state.id, data).then(res => {this.setState({ id: res })} ) 
    }

    guardarTituloHora(tit, hor){
        this.setState({
            titulo: tit
        })
        this.setState({
            hora: hor
        })
        put('api/create/titlehour?id='+this.state.id+'&title='+tit+'&date='+hor).then(() =>{alert("Guardado con exito")})
    }
    render() {
        let imgs = rolListImages;
        let imgs2 = weatherListImages;
        let data = countryList;
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <Grid item xs alignItems="center" className={classes.upperGrid}>
                    <OptionsBoard></OptionsBoard>
                </Grid>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading} >Tipo de viajero</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ marginLeft: '35%', width: '100%', left: "50%" }}>
                        <SeleccionarViajero list={imgs} guardar={this.guardarViajero} id="checkBoxIdViajero" />
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel9a-header"
                    >
                        <Typography className={classes.heading} >Coloca un titulo y fecha a tu viaje</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ marginLeft: '35%', width: '100%', left: "50%" }}>
                        <TituloHora guardar={this.guardarTituloHora} />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Selecciona tu destino</Typography>
                    </AccordionSummary>
                    <h1 style={{ marginLeft: '10%'}}>Seleciona tu destino</h1>
                    <AccordionDetails style={{ marginLeft: '40%', width: '100%', left: "50%" }}>
                        <SeleccionarDestino pais={data} guardar={this.guardarDestino} />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.heading}>Selecciona el clima</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h1>Escoge el Clima</h1><br></br>
                        <SeleccionarClima list={imgs2} guardar={this.guardarClima} id="checkBoxId" />
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography className={classes.heading}>Busca estos accesorios</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h1>Accesorios</h1><br></br>
                        <SeleccionarCategoria list={this.state.accesoriesList} guardar={this.guardarAccesorios} />
                    </AccordionDetails>

                    <AccordionSummary
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                        <h1>A La Mano</h1><br></br>
                        <SeleccionarCategoria list={this.state.onHandList} guardar={this.guardarALaMano} />
                    </AccordionDetails>

                    <AccordionSummary
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                        <h1>Aseo</h1><br></br>
                        <SeleccionarCategoria list={this.state.cleannessList} guardar={this.guardarAseo} />
                    </AccordionDetails>

                    <AccordionSummary
                        aria-controls="panel7a-content"
                        id="panel7a-header"
                    >
                    </AccordionSummary>

                    <AccordionDetails>
                        <h1>Medicina</h1><br></br>
                        <SeleccionarCategoria list={this.state.healthList} guardar={this.guardarMedicina} />
                    </AccordionDetails>

                    <AccordionSummary
                        aria-controls="panel8a-content"
                        id="panel8a-header"
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                        <h1>Ropa</h1><br></br>
                        <SeleccionarCategoria list={this.state.clothesList} guardar={this.guardarRopa} />
                    </AccordionDetails>

                </Accordion>
            </div >
        );
    }
}

export default withStyles(styles)(Main);
