import { createRender } from '@material-ui/core/test-utils';
import { it, describe, beforeAll } from '@jest/globals';
import Travels from '../../travel';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

describe('<Travels />', () => {
    let render;

    beforeAll(() => {
        render = createRender();
    });

    it('should work', () => {
        render(
            <Router>
                <Travels/>
            </Router>
        );
    });
});