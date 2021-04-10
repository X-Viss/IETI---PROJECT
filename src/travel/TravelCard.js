import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './TravelCard.css'
import Button from '@material-ui/core/Button';
import { format } from "date-fns";
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, withStyles } from '@material-ui/core';
const styles = (theme) => ({
    tipo: {
        color:"white"
    }
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
        const { classes } = this.props;
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

                            <Grid ite justify="center" className={classes.tipo}>
                                <Typography variant="h2">
                                    {this.props.travel.title}
                                </Typography>

                                <Typography variant="h5">
                                    Destino: {this.props.travel.lugar}
                                </Typography>
                                <Typography variant="h5">
                                    Fecha de viaje: {this.props.travel.dueDate}
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