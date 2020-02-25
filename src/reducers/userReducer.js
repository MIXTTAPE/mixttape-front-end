import { SET_USER, SET_USER_LOADING } from '../actions/userActions';
import { SAVE_MIXTAPE } from '../actions/editedMixtapeActions';

const initialState = {
  loading: true,
  user: {}
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_LOADING:
      return { ...state, loading: true };
    case SET_USER:
      return { ...state, user: action.payload };
    case SAVE_MIXTAPE:
      // if you find the mixtape in the mixtapes array:
      if(state.mixtapes.find(mixtape => mixtape.nativeId === action.payload.nativeId)) {
        
        // return state with that entry update to reflect the new state
        return { ...state, mixtapes: state.mixtapes.map(mixtape => {
          console.log(mixtape.nativeId, action.payload.nativeId);
          if(mixtape.nativeId === action.payload.nativeId) return action.payload;
        }) };
      }
      // otherwise add the mixtape to the end of the list
      return { ...state, mixtapes: [...state.mixtapes, action.payload] };
    default:
      return state;
  }
};
