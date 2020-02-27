import React from 'react';
import { shallow } from 'enzyme';
import TapeDetail from './TapeDetail';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('TapeDetail component', () => {
  it('renders TapeDetail', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <TapeDetail />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
