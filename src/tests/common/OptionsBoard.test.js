import OptionsBoard from '../../common/OptionsBoard';
import { createRender } from '@material-ui/core/test-utils';
import {it, describe } from '@jest/globals';

describe('<OptionsBoard />', () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it('should work', () => {
    const wrapper = render(<OptionsBoard />);
  });
});