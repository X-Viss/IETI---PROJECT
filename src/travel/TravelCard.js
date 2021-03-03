import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './TravelCard.css'
import Button from '@material-ui/core/Button';
import { format } from "date-fns";
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, withStyles } from '@material-ui/core';
const styles = (theme) => ({

});
class TravelCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleTravelClick = this.handleTravelClick.bind(this);
        this.handleTravelDelete = this.handleTravelDelete.bind(this);
    }

    handleTravelClick() {
        console.log(1)
    }

    handleTravelDelete() {
        this.props.onCardDelete(this.props.keyName);
    }

    render() {
        const bull = <span className="bullet">•</span>;

        return (
            <div style={{ display: "flex" }}>
                <Button id="travelButton" variant="outlined" fullWidth={true} className="cardButton" onClick={this.handleTravelClick}>

                    <CardContent fullWidth className="mainCard">
                        <Grid container direction="column">


                            <Grid fullWidth item>
                                <div align="left" className="travelTitle">
                                    Viaje
                                </div>
                            </Grid>

                            <Grid ite>
                                <Typography variant="h5" component="h2">
                                    {this.props.name}
                                </Typography>

                                <Typography className="pos">


                                    Destino: {this.props.place}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Fecha de viaje: {format(this.props.date, 'yyyy-MM-dd')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Button>

                <Button id="deleteButton" startIcon={<DeleteIcon />} style={{ marginLeft: "auto", color: 'white' }} onClick={this.handleTravelDelete}>


                    Borrar
            </Button>

            </div>
        );
    }
}



TravelCard.defaultProps = {
    name: "Viaje de prueba",
    place: "París",
    date: new Date()
}

export default withStyles(styles)(TravelCard);