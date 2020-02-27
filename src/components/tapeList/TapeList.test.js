import React from 'react';
import { shallow } from 'enzyme';
import TapeList from './TapeList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('TapeList component', () => {
  it('renders TapeList', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <TapeList />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
