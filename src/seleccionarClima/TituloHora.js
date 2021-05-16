import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CustomToast from '../common/CustomToast.js';
import { toast } from 'react-toastify';

export class TituloHora extends React.Component{
    constructor(props){
        super(props)
        this.state = {titulo: "", hora: ""}
        this.handleHoraTemporal = this.handleHoraTemporal.bind(this)
        this.handleTituloTemporal = this.handleTituloTemporal.bind(this)
        this.handleTituloHora = this.handleTituloHora.bind(this)
    }

    /* istanbul ignore next */
    handleHoraTemporal(data){
        data.preventDefault()
        this.setState({
            hora: data.target.value
        })
    }

    /* istanbul ignore next */
    handleTituloTemporal(data){
        data.preventDefault()
        this.setState({
            titulo: data.target.value
        })
    }

    /* istanbul ignore next */
    handleTituloHora(){
        if(this.state.hora=="" || this.state.titulo==""){
            toast.warn("Debes escoger la hora y colocar un título!", {toastId: "warn titulo y hora"}) 
        }else{
            this.props.guardar(this.state.titulo, this.state.hora)
        }
        
    }

    render(){
        return(
            <div id="divTituloHora">
                <CustomToast></CustomToast>
                <h1 style={{ marginLeft: '10%'}}>Coloca un título a tu viaje!</h1>
                <TextField 
                    id="textoTitulo"
                    label="Titulo" variant="outlined"
                    onChange={this.handleTituloTemporal}
                    required
                />
                <h1 style={{ marginLeft: '10%'}}>Prográmalo ya!</h1>
                <TextField
                    id="fechaViaje"
                    label="Es hoy!!"
                    type="datetime-local"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={this.handleHoraTemporal}
                    required
                /><br></br>
                <Button
                    id="tituloHora"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.handleTituloHora}
                    >
                        Guardar
                    </Button>
            </div>
        )
    }
}