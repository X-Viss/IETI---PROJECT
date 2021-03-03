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

const updateInput = (wrapper, instance, newValue) => {
  wrapper.children().find(instance).simulate('change', {
      currentTarget: {value: newValue}
  })
  return wrapper.find(instance)
}

