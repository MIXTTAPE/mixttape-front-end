import { addSong, deleteSong, setAsEdited, SET_MIXTAPE_LOADING, MIXTAPE_LOADING_DONE, SAVE_MIXTAPE } from '../actions/editedMixtapeActions';
import { editedMixtapeReducer } from './editedMixtapeReducer.js';

describe('editedMixtapeReducer', () => {

  it('can handle the SET_MIXTAPE_LOADING case', () => {
    const initialState = {
      loading: false,
      songs: []
    };
    const action = { type: SET_MIXTAPE_LOADING };
    const newState = editedMixtapeReducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      songs: []
    });
  });

  it('can handle the MIXTAPE_LOADING_DONE case', () => {
    const initialState = {
      loading: true,
      songs: []
    };
    const action = { type: MIXTAPE_LOADING_DONE };
    const newState = editedMixtapeReducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      songs: []
    });
  });

  it('can handle a SET_AS_EDITED action', () => {
    const state = {};
    const playlist = {
      mixtapeName: 'My Mixtape',
      songs: []
    };
    const newState = editedMixtapeReducer(state, setAsEdited(playlist));
    expect(newState).toEqual({
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

  it('can handle an ADD_SONG action', () => {
    const state = {
      mixtapeName: 'My Mixtape',
      songs: []
    };
    const payload = {
      nativeId: 'A09FJJJ',
      nativeSource: 'youtube',
      title: 'Ian Andrewson - Kewl Song',
      buyLink: '',
      thumbnail: ''
    };
    const newState = editedMixtapeReducer(state, addSong(payload));
    expect(newState).toEqual({
      mixtapeName: 'My Mixtape',
      songs: [{
        nativeId: 'A09FJJJ',
        nativeSource: 'youtube',
        title: 'Ian Andrewson - Kewl Song',
        buyLink: '',
        thumbnail: ''
      }]   
    });
  });

  it('can handle a DELETE_SONG action', () => {
    const state = {
      mixtapeName: 'My Mixtape',
      songs: [{
        nativeId: 'A09FJJJ',
        nativeSource: 'youtube',
        title: 'Ian Andrewson - Kewl Song',
        buyLink: '',
        thumbnail: ''
      }]
    };
    const payload = 'A09FJJJ';

    const newState = editedMixtapeReducer(state, deleteSong(payload));

    expect(newState).toEqual({
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

  it('can returns state if no action type is provided or no match exists', () => {
    const state = {};
    const payload = {
      title: 'I dunno',
      payload: {
        nativeId: 'AF607105',
        nativeSource: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105'
      }
    };
    const newState = editedMixtapeReducer(state, payload);
    expect(newState).toEqual({});
  });

  it('handles the SAVE_MIXTAPE action', () => {
    const initialState = { 
      mixtapeName: 'blah', 
      songs: ['some songs'], 
      createdBy: 'me', 
      userId: '1' 
    };
    const action = { type: SAVE_MIXTAPE };
    const newState = editedMixtapeReducer(initialState, action);

    expect(newState).toEqual({ mixtapeName: '', songs: [], createdBy: '', userId: '' });
  });
});
