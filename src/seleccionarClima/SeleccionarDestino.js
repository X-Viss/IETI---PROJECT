import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import CustomToast from '../common/CustomToast.js';
import { toast } from 'react-toastify';

export class SeleccionarDestino extends React.Component{
    constructor(props){
        super(props)
        this.state = {pais: ""}
        this.paises = this.props.pais
        this.handlePais = this.handlePais.bind(this)
        this.handlePaisTemporal = this.handlePaisTemporal.bind(this)
    }

    handlePaisTemporal(data){
        data.preventDefault()
        this.setState({
            pais: data.target.textContent
        })
    }

    /* istanbul ignore next */
    handlePais(){
        if(this.state.pais==""){
            toast.warn("Debes escoger un país!", {toastId: "warn país"}) 
        }else{
            this.props.guardar(this.state.pais)
        }
    }

    render(){
        return(
            <div>
                <CustomToast></CustomToast>
                <Dropdown
                    id="paisTemporal"
                    fluid
                    placeholder='¿A qué país te dirijes viajero?'
                    search
                    selection
                    options={this.paises}
                    onChange={this.handlePaisTemporal}
                />
                <Button
                    id="pais"
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.handlePais}
                >
                    Guardar
                </Button><br/><br/>
            </div>
        )
    }
}