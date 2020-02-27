import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Nav component', () => {
  it('renders Nav', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Nav />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
