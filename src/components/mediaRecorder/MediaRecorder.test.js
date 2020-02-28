import React from 'react';
import { shallow } from 'enzyme';
import MediaRecorder from './MediaRecorder';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('MediaRecorder component', () => {
  it('renders MediaRecorder', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <MediaRecorder />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
