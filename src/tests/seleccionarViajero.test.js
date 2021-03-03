import {SeleccionarViajero} from '../seleccionarClima/seleccionarViajero';
import Main from '../seleccionarClima/decoracionMain'
import { render, screen } from '@testing-library/react';
import { Memory } from '@material-ui/icons';
import { create } from "react-test-renderer";
import { cleanup } from '@testing-library/react'
import { mount } from 'enzyme';

test('renders buttons with text', () => {
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

    render(<SeleccionarViajero list={imgs} />);
    const boton1 = screen.getByText(/Hola viajero!, qué rol tomaras esta vez/i);

    expect(boton1).toBeInTheDocument();
});


describe('Seleccionar Viajero', ()=>{
    test("load page Viajero", ()=>{
        render(
            <Memory>
                <SeleccionarViajero/>
            </Memory>
        )
    })
})

describe("Mirar lista Viajero", () => {
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
    const data = jest.fn()
    test("Ver lista", () => {
      const component = mount(<SeleccionarViajero list={imgs} guardar={data} />);
    });
});




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

    it('changes style of div as checkbox is checked/unchecked', () => {
        const component = mount(<SeleccionarViajero list={imgs} />)
        var checkbox = () => component.find('#checkBoxId').at(0)
        checkbox().simulate('click', {target: {check: true}});   
    })

    it('changes style of div as checkbox is checked/unchecked', () => {
        const component = mount(<SeleccionarViajero list={imgs} />)
        var checkbox = () => component.find('#checkBoxId').at(0)
        checkbox().simulate('click', {target: {check: false}});   
    })

    it('deberia leer boton guardar', () => {
        const component = mount(<Main/>);
        component.children().find('#guardar').at(0).simulate("click");
    });

    it('deberia leer boton guardar', () => {
        const component = mount(<Main/>);
        component.children().find('#abrir').at(0).simulate("click");
    });

})

