import { addSong } from '../actions/searchActions';
import { songReducer } from './searchReducer';

describe('Song Reducer', () => {

  let state;
  beforeEach(() => {
    state = {
      mixtape: []
    };
  });

  it('can handle and ADD_SONG action', () => {
    const payload = {
      nativeId: 'AF607105',
      nativeSource: 'youtube',
      title: 'Charlotte Gainsbourg - AF607105'
    };

    const newState = songReducer(state, addSong(payload));

    expect(newState).toEqual({
      mixtape: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105'
        }
      ]
    });
  });

});
