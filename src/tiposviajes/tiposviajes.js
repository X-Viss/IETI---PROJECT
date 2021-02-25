import React, {Component} from 'react';
import AdvancedGridList from "../components/AdvancedGridList";
import BasicCard from "../components/BasicCard";
import {Typography} from "@material-ui/core";

class Tiposviajes extends Component {

    tileData=[
        {
            img: "https://picsum.photos/1280/720?random=1",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=12",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=11",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=21",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=10",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=3",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=7",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=8",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=4",
            title: 'Image',
            author: 'author',
            featured: 1,
        },
        {
            img: "https://picsum.photos/1280/720?random=6",
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
                <AdvancedGridList tileData={this.tileData} title={"Lugares"} numcols={5}/>
            </div>
        );
    }
}

export default Tiposviajes;