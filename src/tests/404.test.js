import {shallow } from 'enzyme'
import { createRender } from '@material-ui/core/test-utils';
import { NotFoundForm } from '../form/404';

it('The Not found renders', () => {
    shallow(<NotFoundForm />)
})

describe('<NotFoundForm />', () => {
    let render;

    beforeAll(() => {
        render = createRender();
    });

    it('should work', () => {
        render(<NotFoundForm />);
    });
});