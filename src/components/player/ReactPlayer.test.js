import React from 'react';
import { shallow } from 'enzyme';
import { ReactPlayerComponent } from './ReactPlayer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('ReactPlayer component', () => {
  it('renders ReactPlayer', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <ReactPlayerComponent url='' playPause={true} nextSong={() => {}} volume={1} />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
