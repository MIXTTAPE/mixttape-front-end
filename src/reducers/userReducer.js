import { SET_USER, SET_USER_LOADING, USER_LOADING_DONE, SET_USER_MIXTAPES } from '../actions/userActions';
import { SAVE_MIXTAPE } from '../actions/editedMixtapeActions';

const initialState = {
  loading: true,
  mixtapes: []
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case USER_LOADING_DONE:
      return { ...state, loading: false };
    case SET_USER:
      return { ...state, user: action.payload, loading: false, mixtapes: action.payload.mixtapes };
    case SAVE_MIXTAPE:
      if(state.mixtapes.includes(mixtape => mixtape._id === action.payload.nativeId)) {
        return { ...state, mixtapes: state.mixtapes.map(mixtape => {
          if(mixtape.nativeId === action.payload.nativeId) return action.payload;
        }) };
      }
      return { ...state, mixtapes: [...state.mixtapes, action.payload] };
    case SET_USER_MIXTAPES:
      return { ...state, mixtapes: action.payload.mixtapes };
    default:
      return state;
  }
};
