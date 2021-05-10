import { render, screen } from '@testing-library/react';
import ButtonsMenu from '../../common/ButtonsMenu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

test('renders buttons with text', () => {
    render(
        <Router>
            <ButtonsMenu />
        </Router>
    );
    const preguntas = screen.getByText(/Preguntas Frecuentes/i);
    const anadir = screen.getByText(/Añadir Viaje/i);
    const crear = screen.getByText(/Ver Mis Viajes/i);

    expect(preguntas).toBeInTheDocument();
    expect(anadir).toBeInTheDocument();
    expect(crear).toBeInTheDocument();
});
