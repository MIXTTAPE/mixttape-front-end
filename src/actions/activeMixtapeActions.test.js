import { setAsActive, SET_AS_ACTIVE, setSongIndex, SET_SONG_INDEX, SET_PLAYING, setPlaying, SET_ACTIVE_LOADING, ACTIVE_LOADING_DONE } from './activeMixtapeActions';

jest.mock('../services/mixtapeApi.js');

describe('activeMixtapeActions', () => {

  let payload;
  beforeEach(() => {
    payload = {
      mixtapeName: 'My Mixtape',
      createdBy: 'josephtatum',
      songs: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          buyLink: '',
          thumbnail: ''
        }
      ]
    };
  });

  it('can set a playlist as active', () => {
    const dispatch = jest.fn();
    const action = setAsActive(payload);

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_ACTIVE_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_AS_ACTIVE,
          payload: {
            mixtapeName: 'mock tape',
            songs: ['test mixtape']
          }
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: ACTIVE_LOADING_DONE
        });
      });
  });

  it('can set a song index', () => {
    const action = setSongIndex(payload);
    expect(action).toEqual({
      type: SET_SONG_INDEX,
      payload
    });
  });

  it('can play/pause the current song', () => {
    const action = setPlaying();
    expect(action).toEqual({
      type: SET_PLAYING
    });
  });
  
});
