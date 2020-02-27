import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Splash component', () => {
  it('renders Splash', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Splash />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
