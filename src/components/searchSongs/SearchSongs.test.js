import React from 'react';
import { shallow } from 'enzyme';
import SearchSongs from './SearchSongs';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('SearchSongs component', () => {
  it('renders SearchSongs', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <SearchSongs />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
