import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
      this.list[position].check ? this.list[position].check=false : this.list[position].check=true
  }

  render(){
        return (
        <div>
            <GridListTileMio list={this.list} enviar={this.handleCheck} width={330} height={200} 
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