import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import ImageBanner from "../components/ImageBanner";

class Inicio extends Component {
    tileData = [
        {
            img: "https://picsum.photos/1280/720",
            title: 'Image',
            author: 'author',
            featured: 4,
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
        },
        {
            img: "https://picsum.photos/1280/720?random=3",
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
            img: "https://picsum.photos/1280/720?random=5",
            title: 'Image',
            author: 'author',
            featured: 4,
        }
    ]

    render() {
        return (
            <div>
                <ImageBanner title={"Title"} description={"Here is the description"} textButton={"Click Me"}/>
                <br/>
                <AdvancedGridList tileData={this.tileData} />
                <br/>
                <SingleLineGridList tileData={this.tileData} />
            </div>
        );
    }
}

export default Inicio;