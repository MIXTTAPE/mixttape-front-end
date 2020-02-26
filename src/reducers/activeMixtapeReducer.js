import { SET_AS_ACTIVE, SET_SONG_INDEX, SET_PLAYING } from '../actions/activeMixtapeActions';

const initialState = {
  playing: false
};

export const activeMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AS_ACTIVE:
      return action.payload;
    case SET_SONG_INDEX:
      return { ...state, currentSongIndex: action.payload };
    case SET_PLAYING:
      if(action.payload === 'stop') return { ...state, playing: false };
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};
