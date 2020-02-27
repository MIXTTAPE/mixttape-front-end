import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
