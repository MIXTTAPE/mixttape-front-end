import { SET_LOADING } from '../actions/splashActions';

const initialState = {
  loading: false
};

export const splashReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return { loading: true };
    default:
      return state;
  }
};
