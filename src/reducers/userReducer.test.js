import { SET_USER_LOADING, SET_USER, USER_LOADING_DONE, userLoadingDone, SET_DELETE_TAPE, SET_AUTH_ERROR, SET_USER_MIXTAPES } from '../actions/userActions';
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
      error: false,
      loading: false,
      mixtapes: [],
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

  it('can handle a DELETE_MIXTAPE case', () => {
    const state = {
      loading: false,
      username: 'josephtatum',
      mixtapes: [
        {
          _id: '5e58144da205cba1fe5424b0',
          mixtapeName: 'ABBA',
          songs: [
            {
              tags: [],
              _id: '5e58144da205cba1fe5424b1',
              nativeId: 'xFrGuyw1V8s',
              nativeSource: 'youtube',
              title: 'Abba - Dancing Queen (Official Video)',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/xFrGuyw1V8s/mqdefault.jpg',
              isMemo: false
            },
            {
              tags: [],
              _id: '5e58144da205cba1fe5424b2',
              nativeId: 'iyIOl-s7JTU',
              nativeSource: 'youtube',
              title: 'ABBA - The Winner Takes It All (1980) HD 0815007',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/iyIOl-s7JTU/mqdefault.jpg',
              isMemo: false
            }
          ],
          createdBy: 'josephtatum',
          userId: '5e580fa7a205cba1fe54248d',
          __v: 0
        },
        {
          _id: '5e58144da205cba1fe5424b1',
          mixtapeName: 'ABBA',
          songs: [
            {
              tags: [],
              _id: '5e58144da205cba1fe5424b1',
              nativeId: 'xFrGuyw1V8s',
              nativeSource: 'youtube',
              title: 'Abba - Dancing Queen (Official Video)',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/xFrGuyw1V8s/mqdefault.jpg',
              isMemo: false
            },
            {
              tags: [],
              _id: '5e58144da205cba1fe5424b2',
              nativeId: 'iyIOl-s7JTU',
              nativeSource: 'youtube',
              title: 'ABBA - The Winner Takes It All (1980) HD 0815007',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/iyIOl-s7JTU/mqdefault.jpg',
              isMemo: false
            }
          ],
          createdBy: 'josephtatum',
          userId: '5e580fa7a205cba1fe54248d',
          __v: 0
        }
      ]
    };
    const payload = '5e58144da205cba1fe5424b1';
    const newState = userReducer(state, { type: SET_DELETE_TAPE, payload });
    expect(newState).toEqual({
      loading: false,
      username: 'josephtatum',
      mixtapes: [
        {
          _id: '5e58144da205cba1fe5424b0',
          mixtapeName: 'ABBA',
          songs: [
            {
              tags: [],
              _id: '5e58144da205cba1fe5424b1',
              nativeId: 'xFrGuyw1V8s',
              nativeSource: 'youtube',
              title: 'Abba - Dancing Queen (Official Video)',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/xFrGuyw1V8s/mqdefault.jpg',
              isMemo: false
            },
            {
              tags: [],
              _id: '5e58144da205cba1fe5424b2',
              nativeId: 'iyIOl-s7JTU',
              nativeSource: 'youtube',
              title: 'ABBA - The Winner Takes It All (1980) HD 0815007',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/iyIOl-s7JTU/mqdefault.jpg',
              isMemo: false
            }
          ],
          createdBy: 'josephtatum',
          userId: '5e580fa7a205cba1fe54248d',
          __v: 0
        }
      ]
    });
  });

  it('should be able to handle the SET_AUTH_ERROR case', () => {
    const action = { type: SET_AUTH_ERROR, payload: 'FAIL' };
    const initialState = {
      user: { username: 'test' },
      loading: true,
      mixtapes: [],
      error: ''
    };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      user: { username: 'test' },
      loading: false,
      mixtapes: [],
      error: 'FAIL'
    });
  });

  it('should be able to handle the SET_USER_MIXTAPES case', () => {
    const initialState = {
      user: { username: 'test', mixtapes: [{
        mixtapeName: 'testTape',
        songs: [{ name: 'this is a song' }]
      }] },
      loading: true,
      error: '',
      mixtapes: []
    };
    const action = { type: SET_USER_MIXTAPES, payload: initialState.user };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      user: { username: 'test', mixtapes: [{
        mixtapeName: 'testTape',
        songs: [{ name: 'this is a song' }]
      }] },
      loading: true,
      error: '',
      mixtapes: [{
        mixtapeName: 'testTape',
        songs: [{ name: 'this is a song' }]
      }]
    });
  });
});
