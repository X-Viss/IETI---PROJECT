import {SeleccionarClima} from '../../seleccionarClima/SeleccionarClima';
import {GridListTileMio} from '../../seleccionarClima/gridListTitle';
import {SeleccionarDestino} from '../../seleccionarClima/SeleccionarDestino';
import {SeleccionarViajero} from '../../seleccionarClima/seleccionarViajero';
import Main from '../../seleccionarClima/decoracionMain'
import { mount } from 'enzyme';
import {it, describe } from '@jest/globals';
import { cleanup } from '@testing-library/react'
import { SeleccionarCategoria } from '../../seleccionarClima/SeleccionarPorCategoria';
import { BrowserRouter as Router } from "react-router-dom";

describe("Main", () => {
    afterEach(cleanup)

    let data = [
        { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
        { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
        { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' }
    ]

    let imgs = [
        {
            path: 'https://i.ibb.co/6JRjSwT/mascotas.jpg',
            name: "Viaje con mascotas",
            check: false,
        },
        {
            path: 'https://i.ibb.co/dKFjmSv/mochilero.jpg',
            name: "Viaje como Mochilero",
            check: false,
        },
        {
            path: 'https://i.ibb.co/3mJhzz1/parejas.jpg',
            name: "Viaje en pareja",
            check: false,

        },
        {
            path: 'https://i.ibb.co/vdJ8ZQc/turistas.jpg',
            name: "Viaje como turista",
            check: false,
        },
        {
            path: 'https://i.ibb.co/88ckWqL/viaje-De-Negocios.jpg',
            name: "Viaje de trabajo",
            check: false,
        }
    ];

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

    it('deberia leer boton guardar en Clima', () => {
        const component = mount(<Router><Main/></Router>);
        component.children().find('#guardar').at(0).simulate("click");
    });

    it('deberia leer boton guardar en hora y titulo', () => {
        const component = mount(<Router><Main/></Router>);
        component.children().find('#tituloHora').at(0).simulate("click");
        component.children().find("#textoTitulo").at(0).simulate("change");
        component.children().find("#fechaViaje").at(0).simulate("change");
    });

    it('deberia leer boton guardar cerrar en Viajero', () => {
        const component = mount(<Router><Main/></Router>);
        component.children().find('#abrir').at(0).simulate("click");
        component.children().find('#cerrar').at(0).simulate("click");
    });

    it('Deberia dar click en checkbox en Viajero a false', () => {
        const component = mount(<Router><Main/></Router>);
        component.children().find('#abrir').at(0).simulate("click");
        var checkbox = () => component.children().find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: false}})
        checkbox().simulate('click', {target: {check: true}})
    })

    it('deberia leer boton abrir en Viajero', () => {
        const component = mount(<Router><Main/></Router>);
        component.children().find("#pais").at(0).simulate("click");
    });

    it('deberia leer boton abrir en Viajero', () => {
        const component = mount(<Router><Main/></Router>);
        component.children().find('#abrir').at(0).simulate("click");
    });

    it('Deberia ir al boton guardar categoria', () => {
        const component = mount(<Router><Main/></Router>)
        component.children().find('#guardarCategoria').at(0).simulate("click");
    }) 

    it('deberia leer boton abrir en Viajero', () => {
        const component = mount(<SeleccionarDestino pais={data}  />);
        component.children().find("#paisTemporal").at(0).simulate("change");
    });

    it('Deberia dar click en checkbox en clima a true', () => {
        const component = mount(<SeleccionarClima list={imgs2} />)
        var checkbox = () => component.find('#checkBoxId').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    })

    it('Deberia dar click en checkbox en clima a false', () => {
        const component = mount(<SeleccionarClima list={imgs2} />)
        var checkbox = () => component.find('#checkBoxId').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    })

    it('Deberia dar click en checkbox en Viajero a true', () => {
        const data = jest.fn()
        const component = mount(<GridListTileMio list={imgs} enviar={data}/>)
        var checkbox = () => component.find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    })

    it('Deberia dar click en checkbox en checkbox en Viajero a false', () => {
        const data = jest.fn()
        const component = mount(<GridListTileMio list={imgs} enviar={data}/>)
        var checkbox = () => component.find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    })

    it('Deberia cambiar el estado de una categoria a true', () => {
        const component = mount(<SeleccionarCategoria list={imgs} />)
        var checkbox = () => component.children().find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    }) 

    it('Deberia cambiar el estado de una categoria a false', () => {
        const component = mount(<SeleccionarCategoria list={imgs} />)
        var checkbox = () => component.children().find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    }) 

})
