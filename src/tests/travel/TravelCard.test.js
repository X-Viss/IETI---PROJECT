import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import TravelCard from '../../travel/TravelCard';

test('renders travel card', () => {
    const travel = {
        name: "Vacaciones",
        place: "Colombia",
        date: new Date()
    }
    render(<TravelCard name={travel.name} place={travel.place} date={travel.date} />);
    const name = screen.getByText(/Vacaciones/i);
    const place = screen.getByText(/Colombia/i);

    expect(name).toBeInTheDocument();
    expect(place).toBeInTheDocument();
});

test('delete function of card', () => {
    const travel = {
        name: "Vacaciones",
        place: "Colombia",
        date: new Date()
    }
    const deleleAction = jest.fn()
    const component = mount(<TravelCard name={travel.name} place={travel.place} date={travel.date} onCardDelete={deleleAction} keyName={100}/>)
    component.find('#deleteButton').at(0).simulate("click");
    expect(deleleAction).toBeCalledWith(100);
});

test('travel function of card', () => {
    const travel = {
        name: "Vacaciones",
        place: "Colombia",
        date: new Date()
    }
    const deleleAction = jest.fn()
    const component = mount(<TravelCard name={travel.name} place={travel.place} date={travel.date} onCardDelete={deleleAction} keyName={100}/>)
    component.find('#travelButton').at(0).simulate("click");
    //expect(deleleAction).toBeCalledTimes(1);
});