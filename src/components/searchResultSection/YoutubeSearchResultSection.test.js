import React from 'react';
import { shallow } from 'enzyme';
import YoutubeSearchResultSection from './YoutubeSearchResultSection';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('YoutubeSearchResultSection component', () => {
  it('renders YoutubeSearchResultSection', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <YoutubeSearchResultSection results={{}} />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
