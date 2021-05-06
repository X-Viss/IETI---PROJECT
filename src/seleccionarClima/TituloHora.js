import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class TituloHora extends React.Component{
    constructor(props){
        super(props)
        this.state = {titulo: "", hora: ""}
        this.handleHoraTemporal = this.handleHoraTemporal.bind(this)
        this.handleTituloTemporal = this.handleTituloTemporal.bind(this)
        this.handleTituloHora = this.handleTituloHora.bind(this)
    }

    handleHoraTemporal(data){
        data.preventDefault()
        this.setState({
            hora: data.target.value
        })
    }

    handleTituloTemporal(data){
        data.preventDefault()
        this.setState({
            titulo: data.target.value
        })
    }

    handleTituloHora(){
        this.props.guardar(this.state.titulo, this.state.hora)
    }

    render(){
        return(
            <div id="divTituloHora">
                <h1 style={{ marginLeft: '10%'}}>Coloca un titulo a tu viaje!</h1>
                <TextField 
                    id="textoTitulo"
                    label="Titulo" variant="outlined"
                    onChange={this.handleTituloTemporal}
                />
                <h1 style={{ marginLeft: '10%'}}>Programalo ya!</h1>
                <TextField
                    id="fechaViaje"
                    label="Es hoy!!"
                    type="datetime-local"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={this.handleHoraTemporal}
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