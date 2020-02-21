import { addSong, deleteSong } from '../actions/searchActions';
import { songReducer } from './searchReducer';

describe('Song Reducer', () => {

  let state;
  beforeEach(() => {
    state = {
      mixtape: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105'
        }
      ]
    };
  });

  it('can handle an ADD_SONG action', () => {
    const payload = {
      nativeId: 'A09FJJJ',
      nativeSource: 'youtube',
      title: 'Ian Andrewson - Kewl Song'
    };

    const newState = songReducer(state, addSong(payload));

    expect(newState).toEqual({
      mixtape: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105'
        },
        {
          nativeId: 'A09FJJJ',
          nativeSource: 'youtube',
          title: 'Ian Andrewson - Kewl Song'
        }
      ]
    });
  });

  it('can handle a DELETE_SONG action', () => {
    const payload = {
      nativeId: 'AF607105',
      nativeSource: 'youtube',
      title: 'Charlotte Gainsbourg - AF607105'
    };

    const newState = songReducer(state, deleteSong(payload));

    expect(newState).toEqual({
      mixtape: []
    });
  });

  it('can returns state if no action type is provided or no match exists', () => {
    const payload = {
      nativeId: 'AF607105',
      nativeSource: 'youtube',
      title: 'Charlotte Gainsbourg - AF607105'
    };

    const newState = songReducer(state, payload);

    expect(newState).toEqual({
      mixtape: [{
        nativeId: 'AF607105',
        nativeSource: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105'
      }]
    });

  });

});
