import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


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
            <form onSubmit={this.handleClave}>
                <GridList cols={4} style={{flexWrap: 'nowrap', transform: 'translateZ(0)'}} >
                {this.list.map((img, i) => (
                    <GridListTile key={i}>
                    <img src={img.path} style={{width: 330, height: 200}} />
                    <GridListTileBar
                        title={img.name}
                        actionIcon={
                            <FormControlLabel
                                control={<Checkbox  style={{color: "white"}} onChange={() => this.handleCheck(i)}></Checkbox>}
                                label="Clic aquí"
                                style={{color: "white"}}
                            />
                        }
                    />
                    </GridListTile>
                ))}
                </GridList>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Guardar
                </Button><br/>
            </form>
        </div>
        );
    }
}