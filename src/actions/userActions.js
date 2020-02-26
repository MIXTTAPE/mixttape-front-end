import { signUp, login } from '../services/auth';

export const SET_USER_LOADING = 'SET_USER_LOADING';
export const setUserLoading = () => ({
  type: SET_USER_LOADING
});

export const USER_LOADING_DONE = 'USER_LOADING_DONE';
export const userLoadingDone = () => ({
  type: USER_LOADING_DONE
});

export const SET_USER = 'SET_USER';

export const setUserSignUp = (username, password) => dispatch => {
  dispatch(setUserLoading());
  return signUp(username, password)
    .then(user => dispatch({
      type: SET_USER,
      payload: user
    })).catch(err => dispatch({
      type: SET_AUTH_ERROR,
      payload: err
    }));
};
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
export const setUserLogin = ({ username, password }) => dispatch => {
  dispatch(setUserLoading());
  return login(username, password)
    .then(user => dispatch({
      type: SET_USER,
      payload: user
    })).catch(err => dispatch({
      type: SET_AUTH_ERROR,
      payload: err
    }));
};
