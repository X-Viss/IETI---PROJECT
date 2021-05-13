import React, {Component} from 'react';
import AdvancedGridList from "../components/AdvancedGridList";
import BasicCard from "../components/BasicCard";
import {Typography} from "@material-ui/core";
import {get} from "../requests/axiosRequests";
import OptionsBoard from "../common/OptionsBoard";
import Grid from "@material-ui/core/Grid";

class Tiposviajes extends Component {
    /* istanbul ignore next */
    constructor() {
        super();
        this.state = {tileData: [], nametrip: "", description: "", tileData2: []};
    }
    /* istanbul ignore next */
    componentDidMount() {
        get("/Trips/" + this.props.title).then(value => {
            console.log(value)
            this.setState({
                nametrip: value[0].nametrip,
                description: value[0].description
            })
        })

        get("/Trips").then(value => {
            this.setState({
                tileData2: value.slice(0, 5).map(item => {
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
                <Grid item xs alignItems="center" style={{height:"15vh",backgroundColor: "#222A4F"}} >
                    <OptionsBoard></OptionsBoard>
                </Grid>
                <div style={{display: "flex"}} >
                    <div  style={{flex: "50%", padding:"5px"}}>
                        <Typography variant="h3" gutterBottom style={{color: 'black'}}>
                            ¿Y tú que harás?
                        </Typography>
                        <img src={"https://picsum.photos/id/424/500"}/>
                    </div>
                    <div style={{flex: "50%", padding: "80px"}}>
                        <BasicCard namesite={this.state.nametrip} description={this.state.description}/>
                    </div>
                </div>

                <br/>
                <br/>
                <AdvancedGridList tileData={this.state.tileData2} title={"Conoce más"} numcols={5}/>
            </div>
        );
    }
}

export default Tiposviajes;