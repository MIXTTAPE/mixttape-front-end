import { ADD_SONG, DELETE_SONG, SET_AS_EDITED, SAVE_MIXTAPE, SET_MIXTAPE_LOADING, MIXTAPE_LOADING_DONE } from '../actions/editedMixtapeActions';

const initialState = {
  mixtapeName: '',
  songs: [],
  createdBy: '',
  userId: ''
};

export const editedMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MIXTAPE_LOADING:
      return { ...state, loading: true };
    case MIXTAPE_LOADING_DONE:
      return { ...state, loading: false };
    case ADD_SONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case DELETE_SONG:
      return { ...state, songs: state.songs.filter(item => item.nativeId !== action.payload) };
    case SET_AS_EDITED:
      return action.payload;
    default:
      return state;
  }
};
