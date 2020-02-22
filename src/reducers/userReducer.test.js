import { setUser } from '../actions/userActions';
import { saveMixtape } from '../actions/editedMixtapeActions';
import { userReducer } from './userReducer';

describe('userReducer', () => {

  it('can handle a SET_USER case', () => {
    const state = {};
    const user = {
      username: 'josephtatum',
      passwordHash: '31415926540',
      mixtapes: []
    };
    const newState = userReducer(state, setUser(user));
    expect(newState).toEqual({
      username: 'josephtatum',
      passwordHash: '31415926540',
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
