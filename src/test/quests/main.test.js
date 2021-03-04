import { render } from '@testing-library/react';
import QuestList from '../../components/QuestList'

describe('<QuestList />', () => {

    it('should work', () => {
        render(<QuestList></QuestList>);
    });
});