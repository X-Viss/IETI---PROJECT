import Enzyme, { shallow} from 'enzyme'
import toJson from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"
import { itemsForLoginForm, LoginForm } from '../form/components';
import { ArticleForForm, MapArticles } from '../form/articles';
import App from '../App';
import reportWebVitals from '../reportWebVitals';

Enzyme.configure({ adapter: new Adapter() })

it('The app renders', () => {
  const wrapper = shallow(<App />)
  expect(toJson(wrapper)).toMatchSnapshot()
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

it('calls click event', () => {
  const wrapper = shallow(<LoginForm />);
  wrapper.find('button').at(0).simulate('click');
});