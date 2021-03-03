import { screen } from '@testing-library/react';
import { mount } from 'enzyme';
import TravelList from '../../travel/TravelList';
import {it, describe } from '@jest/globals';
import { cleanup } from '@testing-library/react'

describe("Should render", () => {
    afterEach(cleanup)
    // your test

    it('Should open modal', () => {
        const component = mount(<TravelList />);
        component.children().find('#deleteButton').at(0).simulate("click");
        const dialogTitle = screen.getByText(/¿Estás seguro que deseas borrar este viaje?/i);
        expect(dialogTitle).toBeInTheDocument();
        component.unmount();

    });

    it('should close modal', () => {
        const component = mount(<TravelList />);
        component.find('#deleteButton').at(0).simulate("click");
        screen.getByText(/¿Estás seguro que deseas borrar este viaje?/i);
        component.find('#dialogDeleteCancel').at(0).simulate("click");

        component.unmount();
    });

    it('should delete', () => {
        const component = mount(<TravelList />);
        component.find('#deleteButton').at(0).simulate("click");
        screen.getByText(/¿Estás seguro que deseas borrar este viaje?/i);
        component.find('#dialogDeleteAccept').at(0).simulate("click");

        component.unmount();
    });
});
