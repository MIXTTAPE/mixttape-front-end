import React from 'react';
import { shallow } from 'enzyme';
import SearchResultSectionItem from './SearchResultSectionItem';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('SearchResultSectionItem component', () => {
  it('renders SearchResultSectionItem', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <SearchResultSectionItem data={{ title: '', nativeSource: '', nativeId: '' }} />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
