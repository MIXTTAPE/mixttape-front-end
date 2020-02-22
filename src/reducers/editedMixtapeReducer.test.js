import { addSong, deleteSong, setAsEdited, saveMixtape } from '../actions/editedMixtapeActions';
import { editedMixtapeReducer } from './editedMixtapeReducer.js';

describe('editedMixtapeReducer', () => {

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
    const payload = {
      nativeId: 'A09FJJJ',
      nativeSource: 'youtube',
      title: 'Ian Andrewson - Kewl Song',
    };

    const newState = editedMixtapeReducer(state, deleteSong(payload));

    expect(newState).toEqual({
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

  it('can handle a SAVE_MIXTAPE action', () => {
    const state = {};
    const playlist = {
      mixtapeName: 'My Mixtape',
      songs: []
    };
    const newState = editedMixtapeReducer(state, saveMixtape(playlist));
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

});
