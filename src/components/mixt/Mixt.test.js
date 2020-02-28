import React from 'react';
import { shallow } from 'enzyme';
import Mixt from './Mixt';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Mixt component', () => {
  it('renders Mixt', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Mixt />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
