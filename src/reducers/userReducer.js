import { SET_USER, SET_USER_LOADING, USER_LOADING_DONE } from '../actions/userActions';
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
      return { ...state, user: action.payload };
    case SAVE_MIXTAPE:
      // if you find the mixtape in the mixtapes array:
      console.log(state.mixtapes);
      if(state.mixtapes.includes(mixtape => mixtape._id === action.payload.nativeId)) {
        
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
