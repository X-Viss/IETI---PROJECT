import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import Categoria from '../../components/Categoria'

it('input check', () => {
    const wrapper = mount(<Categoria />);
    wrapper.children().find('input[type="text"]').simulate('change', {target: {value: 'palo'}});
    
    expect(wrapper.find('input[type="text"]').instance().value).toEqual('palo');
  });

  it('boton check', () => {
    const wrapper = mount(<Categoria />);
    wrapper.find('input[type="text"]').simulate('change', {target: {value: 'palo'}});
    wrapper.find('#icon').at(0).simulate('click');
    expect(wrapper.find('input[type="text"]').instance().value).toEqual('palo');
  });

  it('boton check tab', () => {
    const wrapper = mount(<Categoria />);
    wrapper.find('#tabbutton').at(0).simulate('click');
  });