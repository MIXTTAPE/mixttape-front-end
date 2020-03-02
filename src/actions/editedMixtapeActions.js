import { postTape } from '../services/mixtapeApi';

export const ADD_SONG = 'ADD_SONG';
export const addSong = (payload) => ({
  type: ADD_SONG,
  payload
});


export const DELETE_SONG = 'DELETE_SONG';
export const deleteSong = (payload) => ({
  type: DELETE_SONG,
  payload
});

export const SET_MIXTAPE_LOADING = 'SET_MIXTAPE_LOADING';
export const setMixtapeLoading = () => {
  return { type: SET_MIXTAPE_LOADING };
};

export const MIXTAPE_LOADING_DONE = 'MIXTAPE_LOADING_DONE';
export const mixtapeLoadingDone = () => {
  return { type: MIXTAPE_LOADING_DONE };
};

export const SAVE_MIXTAPE = 'SAVE_MIXTAPE';
export const saveMixtape = (mixtape, history) => dispatch => {
  dispatch(setMixtapeLoading());
  return postTape(mixtape)
    .then(savedTape =>{
      dispatch({
        type: SAVE_MIXTAPE,
        payload: savedTape
      });
      history.replace(`/app/mixtape/${savedTape._id}`)
    })
};

export const SET_AS_EDITED = 'SET_AS_EDITED';
export const setAsEdited = (payload) => ({
  type: SET_AS_EDITED,
  payload
});
