import Enzyme, { mount, shallow } from 'enzyme'
import { createRender } from '@material-ui/core/test-utils';
import toJson from "enzyme-to-json"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { itemsForLoginForm, LoginForm } from '../form/components';
import { ArticleForForm, MapArticles } from '../form/articles';
import App from '../App';
import reportWebVitals from '../reportWebVitals';

Enzyme.configure({ adapter: new Adapter() })

it('The app renders', () => {
  shallow(<App />)
})

it('The app renders react', () => {
  const wrapper = reportWebVitals()
  expect(wrapper).toBeUndefined()
})

it('The login renders', () => {
  const wrapper = shallow(<LoginForm />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('The login renders map', () => {
  const prueba = [
    {
      className: "",
      item: <p label="Usuario" type="email" name="usuario" required={true} />
    },
    {
      className: "",
      item: <p label="Contraseña" type="password" name="password" required={true} />
    }
  ]
  const wrapper = shallow(<MapArticles items={prueba} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('The login renders items', () => {
  const arr = itemsForLoginForm()
  expect(arr).toHaveLength(2)
})

it('The login renders article', () => {
  const prueba = [
    {
      className: "",
      item: <p label="Usuario" type="email" name="usuario" required={true} />
    }
  ]
  const wrapper = shallow(<ArticleForForm item={prueba.item} className={prueba.className} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it('The login renders article not class', () => {
  const prueba = [
    {
      item: <p label="Usuario" type="email" name="usuario" required={true} />
    }
  ]
  const wrapper = mount(<ArticleForForm item={prueba.item} className={"hola"} />)
  expect(wrapper.find('article.hola').instance().className).toBe('hola')

})

it('calls click event not do noting', () => {
  const wrapper = mount(<LoginForm />);
  wrapper.find('button').at(0).simulate('click');
  const vari = wrapper.find('button').at(0).simulate('click');
  expect(vari).toEqual({});
});

describe('<LoginForm />', () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it('should work', () => {
    render(<LoginForm />);
  });
});

it('calls click event', () => {
  const wrapper = mount(<LoginForm />);
  wrapper.children().find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123'}});
  wrapper.find('input[name="usuario"]').simulate('change',{currentTarget:{value:'algo@algo.com'}})
  wrapper.find('form').simulate('submit')
  expect(wrapper.find('input[name="usuario"]').instance().value).toEqual('');
});
