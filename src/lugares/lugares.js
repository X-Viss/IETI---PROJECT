import React, {Component} from 'react';
import SingleLineGridList from "../components/SingleLineGridList";
import AdvancedGridList from "../components/AdvancedGridList";
import BasicCard from "../components/BasicCard";
import {get} from "../requests/axiosRequests";

class Lugares extends Component {
    constructor() {
        super();
        this.state = {tileData: [], namesite: "", location: "", description: "", tileData2: []};
    }
    /* istanbul ignore next */
    componentDidMount() {
        get("/Locations/" + this.props.title).then(value => {
            console.log(value)
            this.setState(prevState => ({
                tileData: [value.image,{
                    img: "https://picsum.photos/1280/720?random=32",
                    featured: 1,
                },
                    {
                        img: "https://picsum.photos/1280/720?random=48",
                        featured: 2,
                    }, ...prevState.tileData],
                namesite: value.namesite,
                location: value.location,
                description: value.description
            }))

        })

        get("/Locations").then(value => {
            this.setState({
                tileData2: value.slice(0, 7).map(item => {
                    return item.image
                })
            })
        })
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div style={{display: "flex"}}>
                    <div style={{flex: "50%", backgroundColor: "#F4F4F4"}}>
                        <AdvancedGridList tileData={this.state.tileData} title={"Conoce más sobre..."} numcols={2}/>
                    </div>
                    <div style={{flex: "50%", padding: "80px"}}>
                        <BasicCard namesite={this.state.title} location={this.state.location}
                                   description={this.state.description}/>
                    </div>
                </div>

                <br/>
                <br/>
                <SingleLineGridList tileData={this.state.tileData2} title={"Similares"}/>
            </div>
        );
    }
}

export default Lugares;