import { setAsActive, setSongIndex, setPlaying } from '../actions/activeMixtapeActions';
import { activeMixtapeReducer } from './activeMixtapeReducer';

describe('activeMixtapeReducer', () => {

  it('can handle a SET_AS_ACTIVE case', () => {
    const state = {};
    const mixtape = {
      mixtapeName: 'My Mixtape',
      songs: [],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    };
    const newState = activeMixtapeReducer(state, setAsActive(mixtape));
    expect(newState).toEqual({
      createdBy: 'josephtatum',
      currentSongIndex: 0,
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

  it('can handle a SET_SONG_INDEX case', () => {
    const state = {
      mixtapeName: 'My Mixtape',
      songs: [],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    };
    const nextSong = state.currentSongIndex + 1;
    const newState = activeMixtapeReducer(state, setSongIndex(nextSong));
    expect(newState).toEqual({
      createdBy: 'josephtatum',
      currentSongIndex: 1,
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

  it('can toggle true and false with a SET_PLAYING case', () => {
    const state = {
      playing: false,
      mixtapeName: 'My Mixtape',
      songs: [],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    };
    const newState = activeMixtapeReducer(state, setPlaying());
    expect(newState).toEqual({
      playing: true,
      createdBy: 'josephtatum',
      currentSongIndex: 0,
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

  it('can be forced false by passing a stop payload with a SET_PLAYING case', () => {
    const state = {
      playing: false,
      mixtapeName: 'My Mixtape',
      songs: [],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    };
    const newState = activeMixtapeReducer(state, setPlaying('stop'));
    expect(newState).toEqual({
      playing: false,
      createdBy: 'josephtatum',
      currentSongIndex: 0,
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

});
