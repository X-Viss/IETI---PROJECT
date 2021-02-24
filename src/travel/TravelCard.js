import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './TravelCard.css'
import Button from '@material-ui/core/Button';
import { format } from "date-fns";
import DeleteIcon from '@material-ui/icons/Delete';


class TravelCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleTravelClick = this.handleTravelClick.bind(this);
        this.handleTravelDelete = this.handleTravelDelete.bind(this);
    }

    handleTravelClick() {
    }

    handleTravelDelete() {
        this.props.onCardDelete(this.props.keyName);
    }

    functionEnLista(){
        this.props.onDelete(1)
    }

    render() {
        const bull = <span className="bullet">•</span>;

        return (
            <div style={{ display: "flex" }}>
                <Button variant="outlined" fullWidth={true} className="cardButton" onClick={this.handleTravelClick}>

                    <CardContent className="mainCard">
                        <Typography variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography className="pos" color="textSecondary">
                            Destino: {this.props.place}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Fecha de viaje: {format(this.props.date, 'yyyy-MM-dd')}
                        </Typography>
                    </CardContent>
                </Button>

                <Button startIcon={<DeleteIcon />} style={{ marginLeft: "auto" }} onClick={this.handleTravelDelete}>
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

export default TravelCard;