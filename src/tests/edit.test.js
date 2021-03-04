import Enzyme, { mount, shallow } from 'enzyme'
import { createRender } from '@material-ui/core/test-utils';
import { itemsForEditForm, EditUserForm } from '../form/edit';

it('The login renders', () => {
  shallow(<EditUserForm />)
})

it('The login renders items', () => {
  const arr = itemsForEditForm()
  expect(arr).toHaveLength(5)
})

it('calls click event not do noting', () => {
  const wrapper = mount(<EditUserForm />);
  wrapper.find('button').at(0).simulate('click');
  const vari = wrapper.find('button').at(0).simulate('click');
  expect(vari).toEqual({});
});

describe('<EditUserForm />', () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it('should work', () => {
    render(<EditUserForm />);
  });
});

it('calls click edit event', () => {
  const wrapper = mount(<EditUserForm />);
  wrapper.children().find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123'}});
  wrapper.find('input[name="correo"]').simulate('change',{currentTarget:{value:'algo@algo.com'}})
  wrapper.find('form').simulate('submit')
  expect(wrapper.find('input[name="correo"]').instance().value).toEqual('j@gmail.com');
});
