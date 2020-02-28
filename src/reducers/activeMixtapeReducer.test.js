import { setAsActive, setSongIndex, setPlaying, SET_AS_ACTIVE, ACTIVE_LOADING_DONE } from '../actions/activeMixtapeActions';
import { activeMixtapeReducer } from './activeMixtapeReducer';
import { SET_MIXTAPE_LOADING } from '../actions/editedMixtapeActions';

describe('activeMixtapeReducer', () => {

  it('can handle a SET_AS_ACTIVE case', () => {
    const initialState = {
      loading: false,
      mixtape: { songs: [] }
    };
    const mixtape = {
      mixtapeName: 'My Mixtape',
      songs: [],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    };
    const newState = activeMixtapeReducer(initialState, { 
      type: SET_AS_ACTIVE, 
      payload: mixtape }
    );

    expect(newState).toEqual({
      loading: false,
      mixtape: {
        createdBy: 'josephtatum',
        currentSongIndex: 0,
        mixtapeName: 'My Mixtape',
        songs: []
      }
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
  
  it('can handle the SET_MIXTAPE_LOADING case', () => {
    const initialState = { loading: false, songs: ['this is a song'] };
    const action = { type: SET_MIXTAPE_LOADING };
    const newState = activeMixtapeReducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      songs: ['this is a song']
    });
  });

  it('can handle the ACTIVE_LOADING_DONE case', () => {
    const initialState = { loading: true, songs: ['this is another song'] };
    const action = { type: ACTIVE_LOADING_DONE };
    const newState = activeMixtapeReducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      songs: ['this is another song']
    });
  });
});
