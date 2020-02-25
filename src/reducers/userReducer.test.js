import { setUserLogin, SET_USER_LOADING } from '../actions/userActions';
import { saveMixtape } from '../actions/editedMixtapeActions';
import { userReducer } from './userReducer';

jest.mock('../services/auth.js');

describe('userReducer', () => {

  it('can handle the SET_USER_LOADING case', () => {
    const initialState = { loading: false, user: {} };
    const action = { type: SET_USER_LOADING };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({ loading: true, user: {} });
  });

  it('can handle a SET_USER case', () => {
    const state = {};
    const user = {
      username: 'mockUserLogin',
      mixtapes: []
    };
    
    const newState = userReducer(state, setUserLogin(user));
    expect(newState).toEqual({
      username: 'mockUserLogin',
      mixtapes: []
    });
  });

  it('can handle a SAVE_MIXTAPE case if the mixtape is new', () => {
    const state = {
      username: 'josephtatum',
      mixtapes: []
    };
    const payload = {
      nativeId: 'AF607105',
      source: 'youtube',
      title: 'Charlotte Gainsbourg - AF607105',
      thumbnail: 'https://google.com/photo',
      buylink: ''
    };
    const newState = userReducer(state, saveMixtape(payload));
    expect(newState).toEqual({
      username: 'josephtatum',
      mixtapes: [{
        nativeId: 'AF607105',
        source: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105',
        thumbnail: 'https://google.com/photo',
        buylink: ''
      }]
    });
  });

  it('can handle a SAVE_MIXTAPE case if the mixtape is not new', () => {
    const state = {
      username: 'josephtatum',
      mixtapes: [{
        nativeId: 'AF607105',
        source: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105',
        thumbnail: '',
        buylink: ''
      }]
    };
    const payload = {
      nativeId: 'AF607105',
      source: 'youtube',
      title: 'Charlotte Gainsbourg - AF607105',
      thumbnail: 'https://google.com/photo',
      buylink: ''
    };
    const newState = userReducer(state, saveMixtape(payload));
    expect(newState).toEqual({
      username: 'josephtatum',
      mixtapes: [{
        nativeId: 'AF607105',
        source: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105',
        thumbnail: 'https://google.com/photo',
        buylink: ''
      }]
    });
  });
});
