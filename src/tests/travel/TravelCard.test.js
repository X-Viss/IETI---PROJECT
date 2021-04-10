import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import TravelCard from '../../travel/TravelCard';

test('renders travel card', () => {
    const travel = {
        title: "Vacaciones",
        lugar: "Colombia",
        dueDate: "Sabado"
    }
    render(<TravelCard travel={travel} />);
    const name = screen.getByText(/Vacaciones/i);
    const place = screen.getByText(/Colombia/i);

    expect(name).toBeInTheDocument();
    expect(place).toBeInTheDocument();
});

test('delete function of card', () => {
    const travel = {
        title: "Vacaciones",
        lugar: "Colombia",
        dueDate: "Sabado"
    }
    const deleleAction = jest.fn()
    const component = mount(<TravelCard travel={travel}  onCardDelete={deleleAction} keyName={100}/>)
    component.find('#deleteButton').at(0).simulate("click");
    expect(deleleAction).toBeCalledWith(100);
});

test('travel function of card', () => {
    const travel = {
        title: "Vacaciones",
        lugar: "Colombia",
        dueDate: "Sabado"
    }
    const deleleAction = jest.fn()
    const component = mount(<TravelCard travel={travel}  onCardDelete={deleleAction} keyName={100}/>)
    component.find('#travelButton').at(0).simulate("click");
    //expect(deleleAction).toBeCalledTimes(1);
});