import React from 'react';
import { shallow } from 'enzyme';
import Create from './Create';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Create component', () => {
  it('renders Create', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Create />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
