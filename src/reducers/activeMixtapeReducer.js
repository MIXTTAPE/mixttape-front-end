import { SET_AS_ACTIVE, SET_SONG_INDEX, SET_PLAYING, ACTIVE_LOADING_DONE, SET_FETCH_ERROR } from '../actions/activeMixtapeActions';
import { SET_MIXTAPE_LOADING } from '../actions/editedMixtapeActions';

const initialState = {
  error : '',
  loading: true,
  playing: false,
  mixtape: { songs: [] },
  currentSongIndex:0
};

export const activeMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MIXTAPE_LOADING:
      return { ...state, loading: true };
    case ACTIVE_LOADING_DONE:
      return { ...state, loading: false };
    case SET_AS_ACTIVE:
      // makes it so you don't have to dispatch another action to set
      // loading to false. saves on re-renders
      return { ...state, loading: false, mixtape: action.payload };
    case SET_SONG_INDEX:
      return { ...state, currentSongIndex: action.payload };
    case SET_PLAYING:
      if(action.payload === 'stop') return { ...state, playing: false };
      if(action.payload === 'play') return { ...state, playing: true };
      return { ...state, playing: !state.playing };
    case SET_FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
