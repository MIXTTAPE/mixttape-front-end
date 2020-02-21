import { ADD_SONG, DELETE_SONG, SET_AS_EDITED } from '../actions/editedMixtapeActions';

const initialState = {};

export const editedMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AS_EDITED:
      return action.payload;
    case ADD_SONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case DELETE_SONG:
      return { ...state, songs: state.songs.filter(item => item.nativeId !== action.payload.nativeId) };
    default:
      return state;
  }
};
