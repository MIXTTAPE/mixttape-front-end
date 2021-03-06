import { fetchTape } from '../services/mixtapeApi';

export const SET_AS_ACTIVE = 'SET_AS_ACTIVE';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR';
export const setAsActive = (id) => dispatch => {
  dispatch(setActiveLoading());
  return fetchTape(id)
    .then(tape=> dispatch({
      type: SET_AS_ACTIVE,
      payload: tape
    }))
    .then(() => dispatch((resetActiveLoading())))
    .catch(err => dispatch({
      type: SET_FETCH_ERROR,
      payload: err
    }));
};

export const setAsActiveNoFetch = (payload) => ({
  type: SET_AS_ACTIVE,
  payload
});

export const SET_SONG_INDEX = 'SET_SONG_INDEX';
export const setSongIndex = (payload) => ({
  type: SET_SONG_INDEX,
  payload
});

export const SET_PLAYING = 'SET_PLAYING';
export const setPlaying = (payload) => ({
  type: SET_PLAYING,
  payload
});

export const SET_ACTIVE_LOADING = 'SET_ACTIVE_LOADING';
export const setActiveLoading = () => ({ type: SET_ACTIVE_LOADING });

export const ACTIVE_LOADING_DONE = 'ACTIVE_LOADING_DONE';
export const resetActiveLoading = () => ({ type: ACTIVE_LOADING_DONE });
