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


export const SAVE_MIXTAPE = 'SAVE_MIXTAPE';
export const saveMixtape = (payload) => ({
  type: SAVE_MIXTAPE,
  payload
});
