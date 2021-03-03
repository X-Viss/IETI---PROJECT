import { createRender } from '@material-ui/core/test-utils';
import { it, describe, beforeAll } from '@jest/globals';
import AppLogo from '../../common/AppLogo';

describe('<AppLogo />', () => {
    let render;

    beforeAll(() => {
        render = createRender();
    });

    it('should work', () => {
        const wrapper = render(<AppLogo />);
    });
});