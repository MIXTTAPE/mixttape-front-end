import { signUp, login, verify } from '../services/auth';

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
    }));
};


export const setUserLogin = (username, password) => dispatch => {
  dispatch(setUserLoading());
  return login(username, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
      dispatch({
        type: SET_USER_MIXTAPES,
        payload: user
      });
    });
};

export const SET_USER_MIXTAPES = 'SET_USER_MIXTAPES';

export const verifyUser = () => dispatch => {
  dispatch(setUserLoading());
  return verify()
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
      dispatch({
        type: SET_USER_MIXTAPES,
        payload: user
      });
    });
    
};
