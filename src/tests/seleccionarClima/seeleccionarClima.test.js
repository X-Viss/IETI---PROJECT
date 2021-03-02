import { createRender } from '@material-ui/core/test-utils';
import { it, describe, beforeAll } from '@jest/globals';
import {SeleccionarClima} from '../../seleccionarClima/SeleccionarClima';

test('choose the weather', () => {
    render(<SeleccionarClima />);
    const preguntas = screen.getByText(/Preguntas Frecuentes/i);
    const anadir = screen.getByText(/Preguntas Frecuentes/i);

    expect(preguntas).toBeInTheDocument();
    expect(anadir).toBeInTheDocument();
});