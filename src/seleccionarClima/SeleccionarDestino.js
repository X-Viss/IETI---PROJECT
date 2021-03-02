import React from 'react';
import { Dropdown } from 'semantic-ui-react'

export class SeleccionarDestino extends React.Component{
    constructor(props){
        super(props)
        this.paises = this.props.pais
        this.handlePais = this.handlePais.bind(this)
    }

    handlePais(pais){
        this.props.guardar(pais.target.textContent)
    }

    render(){
        return(
            <div>
                <h1>Seleciona tu destino</h1>
                    <Dropdown
                        fluid
                        placeholder='¿A qué país te dirijes viajero?'
                        search
                        selection
                        options={this.paises}
                        onChange={this.handlePais}
                    />
            </div>
        )
    }
}