import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('Player component', () => {
  it('renders Player', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <Player />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
