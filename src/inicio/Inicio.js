import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import ImageBanner from "../components/ImageBanner";
import {datatest} from "../tmp/datamock";
import {get} from "../requests/axiosRequests";

class Inicio extends Component {

    constructor() {
        super();
        this.state = {tileData: [], tileData2: []};
    }

    componentDidMount() {
        get("/Locations").then(value => {
            console.log(value)
            this.setState({
                tileData: value.slice(0, 12).map(item => {
                    return item.image
                })
            }, () => {
                console.log(this.state.tileData)
                console.log(datatest)
            })
        })
    }

    render() {
        return (
            <div style={{backgroundColor: "#F4F4F4"}}>
                <div style={{backgroundColor: "#F4F4F4", marginLeft: "80px", marginRight: "80px"}}>
                    <br/>
                    <ImageBanner title={"X-VISS"} description={"Viaja con nosotros"} textButton={"Unirse"}/>
                    <br/><br/><br/>
                    <AdvancedGridList tileData={this.state.tileData} title={"Inspirate"} numcols={4} href={"/lugares"}/>
                    <br/><br/><br/>
                    <SingleLineGridList tileData={datatest} title={"Tipo de viaje"} href={"/tiposviajes"}/>
                </div>
            </div>
        );
    }
}

export default Inicio;