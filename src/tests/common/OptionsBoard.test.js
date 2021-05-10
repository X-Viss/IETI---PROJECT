import OptionsBoard from '../../common/OptionsBoard';
import { createRender } from '@material-ui/core/test-utils';
import {it, describe } from '@jest/globals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

describe('<OptionsBoard />', () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it('should work', () => {
    const wrapper = render(
                      <Router>
                        <OptionsBoard />
                      </Router>
                    );
  });
});