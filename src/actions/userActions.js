import { signUp, login, verify, logout } from '../services/auth';
import { deleteTape } from '../services/mixtapeApi';

export const SET_USER_LOADING = 'SET_USER_LOADING';
export const setUserLoading = () => ({
  type: SET_USER_LOADING
});

export const USER_LOADING_DONE = 'USER_LOADING_DONE';
export const userLoadingDone = () => ({
  type: USER_LOADING_DONE
});

export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
export const SET_USER = 'SET_USER';

export const setUserSignUp = (username, password) => dispatch => {
  dispatch(setUserLoading());
  return signUp(username, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
    }).catch(err => {
      if(err) {
        dispatch({
          type: SET_AUTH_ERROR,
          payload: err
        });
      }
    });
};



export const setUserLogin = (username, password) => dispatch => {
  dispatch(setUserLoading());
  return login(username, password)
    .then(user => {
      dispatch({
        type: SET_USER,
        payload: user
      });
    }).catch(err => {
      if(err) {
        dispatch({
          type: SET_AUTH_ERROR,
          payload: err
        });
      }
    });
};

export const userLogout = (username, password) => dispatch => {
  dispatch(setUserLoading());
  return logout(username, password)
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
    });
};

export const SET_DELETE_TAPE = 'SET_DELETE_TAPE';
export const deleteUserTape = (id) => dispatch => {
  dispatch(setUserLoading());
  return deleteTape(id)
    .then(() => {
      dispatch({
        type: SET_DELETE_TAPE,
        payload: id
      });
    });
};
