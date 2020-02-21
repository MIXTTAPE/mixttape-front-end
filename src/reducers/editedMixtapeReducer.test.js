import { addSong, deleteSong, setAsEdited } from '../actions/editedMixtapeActions';
import { editedMixtapeReducer } from './editedMixtapeReducer.js';

describe('Song Reducer', () => {

  let state;
  beforeEach(() => {
    state = {};
  });

  it('can handle a SET_AS_EDITED action', () => {
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

  // it('can handle an ADD_SONG action', () => {
  //   const payload = {
  //     nativeId: 'A09FJJJ',
  //     nativeSource: 'youtube',
  //     title: 'Ian Andrewson - Kewl Song'
  //   };

  //   const newState = editedMixtapeReducer(state, addSong(payload));

  //   expect(newState).toEqual({
  //     mixtape: [
  //       {
  //         nativeId: 'AF607105',
  //         nativeSource: 'youtube',
  //         title: 'Charlotte Gainsbourg - AF607105'
  //       },
  //       {
  //         nativeId: 'A09FJJJ',
  //         nativeSource: 'youtube',
  //         title: 'Ian Andrewson - Kewl Song'
  //       }
  //     ]
  //   });
  // });

  // it('can handle a DELETE_SONG action', () => {
  //   const payload = {
  //     nativeId: 'AF607105',
  //     nativeSource: 'youtube',
  //     title: 'Charlotte Gainsbourg - AF607105'
  //   };

  //   const newState = editedMixtapeReducer(state, deleteSong(payload));

  //   expect(newState).toEqual({
  //     mixtape: []
  //   });
  // });

  it('can returns state if no action type is provided or no match exists', () => {
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
