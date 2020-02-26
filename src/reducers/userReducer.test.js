import { SET_USER_LOADING, SET_USER, USER_LOADING_DONE, userLoadingDone, VERIFY_USER } from '../actions/userActions';
import { saveMixtape, SAVE_MIXTAPE } from '../actions/editedMixtapeActions';
import { userReducer } from './userReducer';

describe('userReducer', () => {

  it('can handle the SET_USER_LOADING case', () => {
    const initialState = { loading: false, user: {} };
    const action = { type: SET_USER_LOADING };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({ loading: true, user: {} });
  });

  it('can handle the USER_LOADING_DONE case', () => {
    const initialState = { loading: true, user: {} };
    const action = { type: USER_LOADING_DONE };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      user: {}
    });
  });

  it('can handle a SET_USER case', () => {
    const initialState = { loading: true, user: {} };
    const user = {
      username: 'josephtatum',
      passwordHash: '31415926540',
      mixtapes: []
    };
    const action = { type: SET_USER, payload: user };
    
    const newState = userReducer(initialState, action);
    expect(newState).toEqual({
      loading: true,
      user:{
        username: 'josephtatum',
        passwordHash: '31415926540',
        mixtapes: []
      }
    });
  });

  it('can handle a SAVE_MIXTAPE case if the mixtape is new', () => {
    const state = {
      username: 'josephtatum',
      mixtapes: []
    };
    const payload = {
      _id: '001',
      name: 'banger tape',
      songs: [{
        nativeId: 'AF607105',
        source: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105',
        thumbnail: 'https://google.com/photo',
        buylink: ''
      }]
    };
    const newState = userReducer(state, { type: SAVE_MIXTAPE, payload });
    expect(newState).toEqual({
      username: 'josephtatum',
      mixtapes: [
        {
          _id: '001',
          name: 'banger tape',
          songs: [{
            nativeId: 'AF607105',
            source: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            thumbnail: 'https://google.com/photo',
            buylink: ''
          }]
        }
      ]
    });
  });

  it('can handle a SAVE_MIXTAPE case if the mixtape is not new', () => {
    const state = {
      username: 'josephtatum',
      mixtapes: [
        { 
          _id: '001',
          name: 'slow jams',
          songs: [{
            nativeId: 'AF607105',
            source: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            thumbnail: 'https://google.com/photo',
            buylink: ''
          }]
        }
      ]
    };
    const payload = {
      _id: '001',
      name: 'ultra slow jams',
      songs: [
        {
          nativeId: 'AF607105',
          source: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          thumbnail: 'https://google.com/photo',
          buylink: ''
        }
      ]
    };
    const newState = userReducer(state, { type: SAVE_MIXTAPE, payload });

    expect(newState).toEqual({
      username: 'josephtatum',
      mixtapes: [
        { 
          _id: '001',
          name: 'slow jams',
          songs: [{
            nativeId: 'AF607105',
            source: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            thumbnail: 'https://google.com/photo',
            buylink: ''
          }]
        }, {
          _id: '002',
          name: 'workout',
          songs: [
            {
              nativeId: 'AF607105',
              source: 'youtube',
              title: 'Charlotte Gainsbourg - AF607105',
              thumbnail: 'https://google.com/photo',
              buylink: ''
            }
          ]
        }
      ]
    });
  });

  it('can handle the VERIFY_USER action', () => {
    const initialState = {
      loading: true,
      user: {}
    };
    const action = { type: VERIFY_USER, payload: { username: 'mockUserVerified' } };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      user: {
        username: 'mockUserVerified'
      }
    });
  });
});
