import { render } from '@testing-library/react';
import Quest from '../../components/quest';

test('render quest', () => {
    const quest = {
        pregunta: "Como agrego un viaje?",
        respuesta: "crea un viaje",
    }
    render(<Quest qry={quest.pregunta} ans={quest.respuesta}></Quest>);
});
