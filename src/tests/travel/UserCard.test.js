import { mount } from 'enzyme';
import UserCard from '../../travel/UserCard';

test('User card style', () => {
    const deleleAction = jest.fn()
    const component = mount(<UserCard/>)
    //expect(component.prop('classes')).toBeDefined();
});