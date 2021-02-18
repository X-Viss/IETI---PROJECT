import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "./SeleccionarClima"


export class SeleccionarClima extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        let imgs = [
            'https://i.ibb.co/ssC1Wz1/KONICA-MINOLTA-DIGITAL-CAMERA.jpg',
            'https://i.ibb.co/XsY2PSt/oto-o.jpg',
            'https://i.ibb.co/rQ6K4Pp/primavera.jpg',
            'https://i.ibb.co/8BHqHSC/verano.jpg'
        ];

        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',  overflow: 'hidden'}}>
            <GridList cellHeight={250} style={{width: 1500, height: 600}} >
                <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div">Selecciona el clima</ListSubheader>
                </GridListTile>
                {imgs.map((img, i) => (
                <GridListTile key={i}>
                    <img src={img} style={{width: 800, height: 600}} />
                    <GridListTileBar
                    title={i}
                    subtitle={<span>by: {i}</span>}
                    actionIcon={
                        <FormControlLabel
                            control={<Checkbox  name={i} />}
                            label="ome"
                            color="primary"
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
