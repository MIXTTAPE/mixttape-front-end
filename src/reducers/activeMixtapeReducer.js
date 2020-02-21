import { SET_AS_ACTIVE, SET_SONG_INDEX } from '../actions/activeMixtapeActions';

const initialState = {};

export const activeMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AS_ACTIVE:
      return action.payload;
    case SET_SONG_INDEX:
      return { ...state, currentSongIndex: action.payload };
    default:
      return state;
  }
};
