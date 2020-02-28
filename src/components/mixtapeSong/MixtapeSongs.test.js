import React from 'react';
import { shallow } from 'enzyme';
import MixtapeSong from './MixtapeSong';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('MixtapeSongs component', () => {
  it('renders MixtapeSongs', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <MixtapeSong data={{ title: '', nativeSource: '', nativeId: '', thumbnailUrl: '' }} />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
