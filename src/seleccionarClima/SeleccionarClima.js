import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class SeleccionarClima extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        let imgs = [
            {
                path : 'https://i.ibb.co/ssC1Wz1/KONICA-MINOLTA-DIGITAL-CAMERA.jpg',
                name : "Invierno"

            },
            {
                path: 'https://i.ibb.co/XsY2PSt/oto-o.jpg',
                name: "Otoño"
            },
            {
                path: 'https://i.ibb.co/rQ6K4Pp/primavera.jpg',
                name: "Primavera"
            
            },
            {
                path: 'https://i.ibb.co/8BHqHSC/verano.jpg',
                name: "Verano"
            }
        ];

        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',  overflow: 'hidden'}}>
            <GridList cellHeight={250} style={{width: 1500, height: 600}} >
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <h1>Escoge el clime</h1>
                </GridListTile>
                {imgs.map((img, i) => (
                <GridListTile key={i} >
                    <img src={img.path} style={{width: 800, height: 600}} />
                    <GridListTileBar
                    title={img.name}
                    actionIcon={
                        <FormControlLabel
                            control={<Checkbox  name={i} style={{color: "white"}} />}
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
