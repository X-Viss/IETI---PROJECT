import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme'
import { createRender } from '@material-ui/core/test-utils';
import Categoria from '../../components/Categoria'

it('input check', () => {
    const wrapper = mount(<Categoria />);
    wrapper.children().find('input[type="text"]').simulate('change', {target: {value: 'palo'}});
    
    expect(wrapper.find('input[type="text"]').instance().value).toEqual('palo');
  });

  it('boton check', () => {
    const wrapper = mount(<Categoria />);
    wrapper.find('input[type="text"]').simulate('change', {target: {value: 'palo'}});
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('input[type="text"]').instance().value).toEqual('palo');
  });