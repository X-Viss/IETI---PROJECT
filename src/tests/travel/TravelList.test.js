import { screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import TravelList from '../../travel/TravelList';
import {it, describe } from '@jest/globals';
import { cleanup } from '@testing-library/react'

describe("Should render", () => {
    afterEach(cleanup)
    // your test

    it('Should open modal', () => {
        const component = shallow(<TravelList />).dive();
        console.log(component)
        component.instance().handleCardDelete(-1);
        component.unmount();

    });

    it('should close modal', () => {
        const component = shallow(<TravelList />).dive();
        console.log(component)
        component.instance().handleDialogClose();
        component.unmount();
    });

    it('should delete', () => {
        const travel = {
            title: "Vacaciones",
            lugar: "Colombia",
            dueDate: "Sabado"
        }
        const component = shallow(<TravelList />).dive();
        console.log(component);
        component.instance().handleCardDelete(0);
        component.instance().addTask(travel);
        component.instance().handleDeleteCardConfirmation();

        component.unmount();
    });
});

