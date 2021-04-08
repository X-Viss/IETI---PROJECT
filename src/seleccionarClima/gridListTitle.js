import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export class GridListTileMio extends React.Component {
    constructor(props){
        super(props)
        this.id = this.props.id
        this.imgs = this.props.list
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(position){
        this.props.enviar(position)
    }

    render(){
        return(
            <div>
            <GridList cols={this.props.cols} style={this.props.style}>
            {this.imgs.map((img, i) => (
                <GridListTile key={i} >
                    <img src={img.path} style={{width: this.props.width, height: this.props.height}} />
                    <GridListTileBar
                    title={img.name}
                    actionIcon={
                        <FormControlLabel
                            id="control"
                            control={<Checkbox id="checkBox" style={{color: "white"}} onClick={() => this.handleCheck(i)} />}
                            label="Clic aqui"
                            style={{color: "white"}}
                        />
                    }
                    />
                </GridListTile>
            ))}
            </GridList>
            </div>
        )
    }

}