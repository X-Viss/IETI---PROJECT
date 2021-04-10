import { createRender } from '@material-ui/core/test-utils';
import { it, describe, beforeAll } from '@jest/globals';
import ProtectedRoute from '../../common/ProtectedRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';


describe('<ProtectedRoute />', () => {
    let render;

    beforeAll(() => {
        render = createRender();
    });

    it('should work', () => {
        render(<Router> <ProtectedRoute isAuthenticated={false} component={<div></div>}/></Router>);
    });
});

