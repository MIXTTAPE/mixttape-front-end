import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Login component', () => {
  it('renders Login', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Login  onClick={() => {}}/>
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
