import { SET_AS_ACTIVE, SET_SONG_INDEX, SET_PLAYING, ACTIVE_LOADING_DONE } from '../actions/activeMixtapeActions';
import { SET_MIXTAPE_LOADING } from '../actions/editedMixtapeActions';

const initialState = {
  loading: true,
  playing: false,
  mixtape: { songs: [] },
};

export const activeMixtapeReducer = (state = initialState, action) => {
  switch(action.type) { 
    case SET_MIXTAPE_LOADING:
      return { ...state, loading: true };
    case ACTIVE_LOADING_DONE:
      return { ...state, loading: false };
    case SET_AS_ACTIVE:
      console.log({ ...state, mixtape: action.payload });
      return { ...state, mixtape: action.payload };
    case SET_SONG_INDEX:
      return { ...state, currentSongIndex: action.payload };
    case SET_PLAYING:
      if(action.payload === 'stop') return { ...state, playing: false };
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};
