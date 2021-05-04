import React from 'react';
import Button from '@material-ui/core/Button';
import {GridListTileMio} from './gridListTitle';

export class SeleccionarCategoria extends React.Component {
    
  constructor(props){
      super(props)
      this.list = this.props.list
      this.handleClave = this.handleClave.bind(this)
      this.handleCheck = this.handleCheck.bind(this)
  }

  handleClave(e){
        e.preventDefault();
        this.props.guardar(this.list)
  }

  handleCheck(position){
      this.props.list[position].check ? this.props.list[position].check=false : this.props.list[position].check=true
  }

  render(){
        return (
        <div>
            <GridListTileMio list={this.props.list} enviar={this.handleCheck} width={300} height={300} 
            style={{flexWrap: 'nowrap', transform: 'translateZ(0)'}} cols={4} />
            <Button
                id="guardarCategoria"
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.handleClave}
            >
                Guardar
            </Button><br/>
        </div>
        );
    }
}