import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


export class SeleccionarClima extends React.Component {

    constructor(props){
        super(props)
        this.imgs = this.props.list
        this.handleClave = this.handleClave.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleClave(e){
        e.preventDefault();
        this.props.guardar(this.imgs)
    }

    handleCheck(position){
        this.imgs[position].check ? this.imgs[position].check=false : this.imgs[position].check=true
    }

    render() {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',  overflow: 'hidden'}}>
            <GridList cellHeight={250} style={{width: 1500, height: 600}} >
                <GridListTile cols={2} style={{ height: 'auto' }}>
                    <h1>Escoge el clima</h1>
                </GridListTile>
                {this.imgs.map((img, i) => (
                <GridListTile key={i} >
                    <img src={img.path} style={{width: 800, height: 600}} />
                    <GridListTileBar
                    title={img.name}
                    actionIcon={
                        <FormControlLabel
                            id="controlLabel"
                            control={<Checkbox id="checkBoxId" style={{color: "white"}} onClick={() => this.handleCheck(i)} />}
                            label="Clic aqui"
                            style={{color: "white"}}
                        />
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
            <Button
                id = "guardar"
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.handleClave}
            >
                Guardar
            </Button>
            </div>
        );
    }

}