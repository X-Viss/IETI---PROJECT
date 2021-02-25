import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export class SeleccionarCategoria extends React.Component {
  constructor(props){
      super(props)
      this.list = this.props.list
  }

  render(){
        return (
        <div>
            <GridList cols={2.5} style={{flexWrap: 'nowrap', transform: 'translateZ(0)',}}>
            {this.list.map((img, i) => (
                <GridListTile key={i}>
                <img src={img.path} style={{width: 800, height: 600}} />
                <GridListTileBar
                    title={img.name}
                    actionIcon={
                        <FormControlLabel
                        control={<Checkbox  style={{color: "white"}} />}
                        label="Clic aquí"
                        style={{color: "white"}}
                        />
                    }
                />
                </GridListTile>
            ))}
            </GridList>
        </div>
        );
    }
}