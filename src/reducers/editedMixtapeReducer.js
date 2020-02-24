import { ADD_SONG, DELETE_SONG, SET_AS_EDITED, SAVE_MIXTAPE } from '../actions/editedMixtapeActions';

const initialState = {
  songs: []
};

export const editedMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case DELETE_SONG:
      return { ...state, songs: state.songs.filter(item => item.nativeId !== action.payload) };
    case SET_AS_EDITED:
      return action.payload;
    case SAVE_MIXTAPE:
      return action.payload;
    default:
      return state;
  }
};
