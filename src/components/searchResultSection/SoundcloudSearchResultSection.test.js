import React from 'react';
import { shallow } from 'enzyme';
import SoundcloudSearchResultSection from './SoundcloudSearchResultSection';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('SoundcloudSearchResultSection component', () => {
  it('renders SoundcloudSearchResultSection', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <SoundcloudSearchResultSection results={{}} />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
