import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('SignUp component', () => {
  it('renders SignUp', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <SignUp  onClick={() => {}}/>
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
