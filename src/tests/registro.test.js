import Enzyme, { mount, shallow } from 'enzyme'
import { createRender } from '@material-ui/core/test-utils';
import { itemsForRegisterForm, RegisterForm } from '../form/components';
import { ArticleForForm, MapArticles } from '../form/articles';
import App from '../App';


it('The register renders', () => {
  shallow(<RegisterForm />)
})

it('The register renders items', () => {
  const arr = itemsForRegisterForm()
  expect(arr).toHaveLength(6)
})

it('calls register click event not do noting', () => {
  const wrapper = mount(<RegisterForm />);
  wrapper.find('button').at(0).simulate('click');
  const vari = wrapper.find('button').at(0).simulate('click');
  expect(vari).toEqual({});
});

describe('<RegisterForm />', () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it('should work', () => {
    render(<RegisterForm />);
  });
});

it('calls click register event', () => {
  const wrapper = mount(<RegisterForm />);
  wrapper.find('input[name="correo"]').simulate('change',{currentTarget:{value:'algo@algo.com'}})
  wrapper.find('form').simulate('submit')
  expect(wrapper.find('input[name="correo"]').instance().value).toEqual('');
});

/*
const updateInput = (wrapper, instance, newValue) => {
  const input = wrapper.find(instance)
  Console.log(input)
  input.simulate('change', {
      currentTarget: {value: newValue}
  })
  return wrapper.find(instance)
}

it('calls click register pas event', () => {
  const wrapper = mount(<RegisterForm />);
    updateInput(wrapper, '[name="password"]', '8018882321')
    wrapper.find('[data-testid="addUserForm"]').simulate('submit', {preventDefault: () => {}})
    expect(api.addUser).toHaveBeenCalledWith('8018882321')
});

it('calls click register nopas event', () => {
  const wrapper = mount(<RegisterForm />);
  wrapper.find('input[name="password"]').simulate('change',{currentTarget:{value:'1324'}})
  wrapper.find('input[name="password2"]').simulate('change',{currentTarget:{value:'1304'}})

  expect(wrapper.find('input[name="password"]').instance().value).not().toEqual(wrapper.find('input[name="password2"]').instance().value);
});*/