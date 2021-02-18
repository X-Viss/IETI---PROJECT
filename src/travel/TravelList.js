
import React, { useDebugValue } from 'react';
import TravelCard from './TravelCard.js';

class TravelList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            travels: [{
                name: "Negocios de cartera",
                place: "Argentina",
                date: new Date()
            },
            {
                name: "Vacaciones en méxico",
                place: "México",
                date: new Date()
            },
            {
                name: "Viaje por chile",
                place: "Chile",
                date: new Date()
            }]
        };
    }

    render() {
        const renderTravels = this.state.travels.map((value, index) => {
            return (
            <TravelCard key={index} name={value.name} place={value.place} date={value.date}>
            </TravelCard>
            );
        })
        return (
            <div>
                {renderTravels}
            </div>
        )
    }
}

export default TravelList;