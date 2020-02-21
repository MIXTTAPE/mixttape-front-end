import { ADD_SONG, DELETE_SONG, SET_AS_EDITED, SAVE_MIXTAPE } from '../actions/editedMixtapeActions';

const initialState = {};

export const editedMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case DELETE_SONG:
      return { ...state, songs: state.songs.filter(item => item.nativeId !== action.payload.nativeId) };
    case SET_AS_EDITED:
      return action.payload;
    case SAVE_MIXTAPE:
      /*I AM NOT WORKING YET!!!! */
      /* send mixtape to the database */
      /* add mixtape to state */
      return {};
    default:
      return state;
  }
};
