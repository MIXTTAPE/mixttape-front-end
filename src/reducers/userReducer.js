import { SET_USER } from '../actions/userActions';

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
