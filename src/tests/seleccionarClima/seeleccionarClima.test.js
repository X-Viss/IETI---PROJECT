import {SeleccionarClima} from '../../seleccionarClima/SeleccionarClima';
import Main from '../../seleccionarClima/decoracionMain'
import { render, screen } from '@testing-library/react';
import { Memory } from '@material-ui/icons';
import { create } from "react-test-renderer";

test('renders buttons with text', () => {
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

    render(<SeleccionarClima list={imgs2} />);
    const boton = screen.getByText(/Guardar/i);
    const texto = screen.getByText(/Escoge el clima/i);

    expect(boton).toBeInTheDocument();
    expect(texto).toBeInTheDocument();
});


describe('SeleccionarClima', ()=>{
    test("load page Clima", ()=>{
        render(
            <Memory>
                <SeleccionarClima/>
            </Memory>
        )
    })
})

describe('Seleccionar Main', ()=>{
    test("load page Main", ()=>{
        render(
            <Memory>
                <Main/>
            </Memory>
        )
    })
})






