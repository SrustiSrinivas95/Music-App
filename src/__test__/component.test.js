import React from 'react';
import {shallow} from 'enzyme';
import Input from '../components/Atoms/Input';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Input', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Input />)                                
  });
    it('Is Input component renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
});