import React, {Component} from 'react';
import AdvancedGridList from "../components/AdvancedGridList";
import BasicCard from "../components/BasicCard";
import {Typography} from "@material-ui/core";
import {datatest3} from "../tmp/datamock";

class Tiposviajes extends Component {

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div style={{display: "flex"}} >
                    <div  style={{flex: "50%", padding:"5px"}}>
                        <Typography variant="h3" gutterBottom style={{color: 'black'}}>
                            ¿Y tú que harás?
                        </Typography>
                        <img src={"https://picsum.photos/id/424/500"}/>
                    </div>
                    <div style={{flex: "50%", padding: "80px"}}>
                        <BasicCard namesite={"Glamping"} description={" Es un creciente fenómeno global que combina la experiencia de acampar al aire libre con el lujo y las condiciones propias de los mejores hoteles.​ El término, acuñado a finales del siglo XIX, es una fusión de las palabras glamour y camping."}/>
                    </div>
                </div>

                <br/>
                <br/>
                <AdvancedGridList tileData={datatest3} title={"Lugares"} numcols={5}/>
            </div>
        );
    }
}

export default Tiposviajes;