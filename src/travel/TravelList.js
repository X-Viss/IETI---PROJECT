
import React, { useDebugValue } from 'react';
import TravelCard from './TravelCard.js';

class TravelList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: "rr",
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

        this.handleCardDelete = this.handleCardDelete.bind(this);
    }


    handleCardDelete(key){
        this.setState(prevState => {
            const travels = prevState.travels.filter(item => item.key !== key);
            return {
                travels
            }
        });
    }

    render() {
        const renderTravels = this.state.travels.map((value, index) => {
            value.key = index;
            return (
            <TravelCard key= {index} keyName={index} name={value.name} place={value.place} date={value.date} onDelete={this.onCardDelete} onCardDelete={this.handleCardDelete}>
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