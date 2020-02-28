import React from 'react';
import { shallow } from 'enzyme';
import EditTape from './EditTape';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);


describe('EditTape component', () => {
  it('renders EditTape', () => {
    const store = mockStore({
      userInfo: '',
      activeMixtape: '',
      lastEditedMixtape: ''
    });
    const wrapper = shallow(
      <Provider store={store} >
        <EditTape />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
