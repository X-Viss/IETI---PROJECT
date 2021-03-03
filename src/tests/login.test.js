import Enzyme, { mount, shallow } from 'enzyme'
import { createRender } from '@material-ui/core/test-utils';
import { itemsForRegisterForm, LoginForm } from '../form/components';
import { ArticleForForm, MapArticles } from '../form/articles';
import App from '../App';


it('The app renders', () => {
  shallow(<App />)
})

it('The register renders', () => {
  shallow(<LoginForm />)
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
  shallow(<MapArticles items={prueba} />)
})

it('The register renders items', () => {
  const arr = itemsForRegisterForm()
  expect(arr).toHaveLength(6)
})

it('The login renders article', () => {
  const prueba = [
    {
      className: "",
      item: <p label="Usuario" type="email" name="usuario" required={true} />
    }
  ]
  shallow(<ArticleForForm item={prueba.item} className={prueba.className} />)
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
