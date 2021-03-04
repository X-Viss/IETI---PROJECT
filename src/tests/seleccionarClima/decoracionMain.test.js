import {SeleccionarClima} from '../../seleccionarClima/SeleccionarClima';
import Main from '../../seleccionarClima/decoracionMain'
import { render, screen } from '@testing-library/react';
import { Memory } from '@material-ui/icons';
import { create } from "react-test-renderer";
import { mount } from 'enzyme';
import {it, describe } from '@jest/globals';
import { cleanup } from '@testing-library/react'


describe("Main", () => {
    afterEach(cleanup)

    let imgs2 = [
        {
            path : 'https://i.ibb.co/ssC1Wz1/KONICA-MINOLTA-DIGITAL-CAMERA.jpg',
            name : "Invierno",
            check: false

        },
        {
            path: 'https://i.ibb.co/XsY2PSt/oto-o.jpg',
            name: "Otoño",
            check: false
        },
        {
            path: 'https://i.ibb.co/rQ6K4Pp/primavera.jpg',
            name: "Primavera",
            check: false
        
        },
        {
            path: 'https://i.ibb.co/8BHqHSC/verano.jpg',
            name: "Verano",
            check: false
        }
    ];

    it('deberia leer boton guardar', () => {
        const component = mount(<Main/>);
        component.children().find('#guardar').at(0).simulate("click");
    });

    it('changes style of div as checkbox is checked/unchecked', () => {
        const component = mount(<SeleccionarClima list={imgs2} />)
        var checkbox = () => component.find('#checkBoxId').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    })

    it('changes style of div as checkbox is checked/unchecked', () => {
        const component = mount(<SeleccionarClima list={imgs2} />)
        var checkbox = () => component.find('#checkBoxId').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    })

})