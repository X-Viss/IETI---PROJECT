import {SeleccionarClima} from '../../seleccionarClima/SeleccionarClima';
import {GridListTileMio} from '../../seleccionarClima/gridListTitle'
import {SeleccionarViajero} from '../../seleccionarClima/seleccionarViajero';
import {SeleccionarCategoria} from '../../seleccionarClima/SeleccionarPorCategoria'
import Main from '../../seleccionarClima/decoracionMain'
import { render, screen } from '@testing-library/react';
import { Memory } from '@material-ui/icons';
import { create } from "react-test-renderer";
import { mount } from 'enzyme';
import {it, describe } from '@jest/globals';
import { cleanup } from '@testing-library/react'


describe("Main", () => {
    afterEach(cleanup)

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
        const component = mount(<Main/>);
        component.children().find('#guardar').at(0).simulate("click");
    });

    it('deberia leer boton guardar cerrar en Viajero', () => {
        const component = mount(<Main/>);
        component.children().find('#cerrar').at(0).simulate("click");
    });

    it('deberia leer boton abrir en Viajero', () => {
        const component = mount(<Main/>);
        component.children().find('#abrir').at(0).simulate("click");
    });

    it('deberia leer boton abrir en Categoria', () => {
        const component = mount(<Main/>);
        component.children().find('#guardarCategoria').at(0).simulate("click");
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

    it('Deberia dar click en checkbox en Viajero a false', () => {
        const component = mount(<SeleccionarViajero list={imgs} />)
        var checkbox = () => component.children().find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    })

    it('Deberia dar click en checkbox en Viajero a true', () => {
        const component = mount(<SeleccionarViajero list={imgs} />)
        var checkbox = () => component.children().find('#checkBox').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    })

    it('Deberia dar click en checkbox en Categoria a true', () => {
        const component = mount(<SeleccionarCategoria list={imgs} />)
        var checkbox = () => component.find('#checkBoxCaterogira').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    })

    it('Deberia dar click en checkbox en Cateogira a false', () => {
        const component = mount(<SeleccionarCategoria list={imgs} />)
        var checkbox = () => component.find('#checkBoxCaterogira').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    })    

})