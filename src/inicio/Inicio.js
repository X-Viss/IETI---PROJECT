import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import ImageBanner from "../components/ImageBanner";
import {datatest} from "../tmp/datamock";

class Inicio extends Component {

    render() {
        return (
            <div style={{backgroundColor:"#F4F4F4",marginLeft:"80px",marginRight:"80px"}}>
                <br/>
                <ImageBanner title={"Title"} description={"Here is the description"} textButton={"Click Me"}/>
                <br/><br/><br/>
                <AdvancedGridList tileData={datatest} title={"Inspirate"} numcols={4}/>
                <br/><br/><br/>
                <SingleLineGridList tileData={datatest} title={"Tipo de viaje"}/>
            </div>
        );
    }
}

export default Inicio;