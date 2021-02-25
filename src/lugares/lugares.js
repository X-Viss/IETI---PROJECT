import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import ImageBanner from "../components/ImageBanner";
import BasicCard from "../components/BasicCard";

class Lugares extends Component {
    tileData = [
        {
            img: "https://picsum.photos/1280/720",
            title: 'Image',
            author: 'author',
            featured: 2,
        },
        {
            img: "https://picsum.photos/1280/720?random=1",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=2",
            title: 'Image',
            author: 'author',
            featured: 1,
        }
    ]



    render() {
        return (
            <div>
                <br/>
                <br/>
                <div style={{display: "flex"}} >
                    <div  style={{flex: "50%"}}>
                        <AdvancedGridList tileData={this.tileData} title={"Conoce más sobre..."} numcols={2}/>
                    </div>
                    <div style={{flex: "50%", padding: "80px"}}>
                        <BasicCard namesite={"Laguna de Guatavita"} location={"Cundinamarca"} description={"La laguna del Cacique Guatavita se encuentra en la cordillera oriental de Colombia, en el municipio de Sesquilé, al norte de la cabecera municipal de Guatavita a una distancia de 75 km al nordeste de Bogotá, provincia de Almeidas de Cundinamarca."}/>
                    </div>
                </div>

                <br/>
                <br/>
                <SingleLineGridList tileData={this.tileData} title={"Similares"}/>
            </div>
        );
    }
}

export default Lugares;