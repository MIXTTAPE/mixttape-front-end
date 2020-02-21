import { ADD_SONG, DELETE_SONG } from '../actions/searchActions';

const initialState = {
  mixtape: []
};

export const songReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SONG:
      return { ...state, mixtape: [...state.mixtape, action.payload] };
    case DELETE_SONG:
      return { ...state, mixtape: state.mixtape.filter(item => item.nativeId !== action.payload.nativeId) };
    default:
      return state;
  }
};
