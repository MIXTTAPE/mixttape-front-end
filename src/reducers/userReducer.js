import { SET_USER, SET_USER_LOADING, SET_USER_MIXTAPES, SET_AUTH_ERROR, SET_DELETE_TAPE } from '../actions/userActions';
import { SAVE_MIXTAPE } from '../actions/editedMixtapeActions';

const initialState = {
  loading: false,
  username: '', 
  mixtapes: [],
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case SET_USER:
      return { ...state, user: action.payload, loading: false, mixtapes: action.payload.mixtapes, error: false };
    case SAVE_MIXTAPE:
      return { ...state, mixtapes: [...state.mixtapes, action.payload] };
    case SET_AUTH_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_USER_MIXTAPES:
      return { ...state, mixtapes: action.payload.mixtapes };
    case SET_DELETE_TAPE:
      return { ...state, mixtapes: state.mixtapes.filter(mixtape => mixtape._id !== action.payload), loading: false };
    default:
      return state;
  }
};
