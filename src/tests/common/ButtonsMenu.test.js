import { render, screen } from '@testing-library/react';
import ButtonsMenu from '../../common/ButtonsMenu';

test('renders buttons with text', () => {
    render(<ButtonsMenu />);
    const preguntas = screen.getByText(/Preguntas Frecuentes/i);
    const anadir = screen.getByText(/Preguntas Frecuentes/i);

    expect(preguntas).toBeInTheDocument();
    expect(anadir).toBeInTheDocument();
});
