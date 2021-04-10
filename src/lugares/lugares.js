import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import BasicCard from "../components/BasicCard";
import {datatest2} from "../tmp/datamock";
import {get} from "../requests/axiosRequests";

class Lugares extends Component {
    constructor() {
        super();
        this.state = {tileData: "", namesite: "", location: "", description: "", tileData2: ""};
    }

    componentDidMount() {
        get("/Locations/" + this.props.title).then(value => {
            console.log(value)
        })
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div style={{display: "flex"}}>
                    <div style={{flex: "50%", backgroundColor: "#F4F4F4"}}>
                        <AdvancedGridList tileData={datatest2} title={"Conoce más sobre..."} numcols={2}/>
                    </div>
                    <div style={{flex: "50%", padding: "80px"}}>
                        <BasicCard namesite={this.props.title} location={"Cundinamarca"}
                                   description={"La laguna del Cacique Guatavita se encuentra en la cordillera oriental de Colombia, en el municipio de Sesquilé, al norte de la cabecera municipal de Guatavita a una distancia de 75 km al nordeste de Bogotá, provincia de Almeidas de Cundinamarca."}/>
                    </div>
                </div>

                <br/>
                <br/>
                <SingleLineGridList tileData={datatest2} title={"Similares"}/>
            </div>
        );
    }
}

export default Lugares;