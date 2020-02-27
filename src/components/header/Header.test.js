import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Header component', () => {
  it('renders Header', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Header />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
