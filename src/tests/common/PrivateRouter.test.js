import { createRender } from '@material-ui/core/test-utils';
import { it, describe, beforeAll } from '@jest/globals';
import ProtectedRoute from '../../common/ProtectedRoute';
import { BrowserRouter as Router } from 'react-router-dom';


describe('<ProtectedRoute />', () => {
    let render;

    beforeAll(() => {
        render = createRender();
    });

    it('should work', () => {
        const wrapper = render(<Router> <ProtectedRoute /></Router>);
    });
});

