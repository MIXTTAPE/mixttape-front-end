import { ADD_SONG, DELETE_SONG, SET_AS_EDITED } from '../actions/editedMixtapeActions';

const initialState = {};

export const editedMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AS_EDITED:
      console.log(action.payload);
      return action.payload;
    case ADD_SONG:
      return { ...state, action };
    case DELETE_SONG:
      return { ...state, mixtape: state.mixtape.filter(item => item.nativeId !== action.payload.nativeId) };
    default:
      return state;
  }
};
