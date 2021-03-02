import { createRender } from '@material-ui/core/test-utils';
import { it, describe, beforeAll } from '@jest/globals';
import Travels from '../../travel'

describe('<Travels />', () => {
    let render;

    beforeAll(() => {
        render = createRender();
    });

    it('should work', () => {
        const wrapper = render(<Travels />);
    });
});