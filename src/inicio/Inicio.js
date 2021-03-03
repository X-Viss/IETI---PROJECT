import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import ImageBanner from "../components/ImageBanner";
import {datatest} from "../tmp/datamock";

class Inicio extends Component {

    render() {
        return (
            <div>
                <ImageBanner title={"Title"} description={"Here is the description"} textButton={"Click Me"}/>
                <br/>
                <AdvancedGridList tileData={datatest} title={"Inspirate"} numcols={4}/>
                <br/>
                <SingleLineGridList tileData={datatest} title={"Tipo de viaje"}/>
            </div>
        );
    }
}

export default Inicio;