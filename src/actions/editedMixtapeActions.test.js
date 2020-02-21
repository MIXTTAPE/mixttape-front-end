import { ADD_SONG, DELETE_SONG, addSong, deleteSong } from './editedMixtapeActions';

describe('editedMixtape Actions', () => {

  it('can add a song to a mixtape', () => {
    const action = addSong('AA8723');
    expect(action).toEqual({
      type: ADD_SONG,
      payload: 'AA8723'
    });
  });

  it('can delete a song from a mixtape', () => {
    const action = deleteSong('AA8723');
    expect(action).toEqual({
      type: DELETE_SONG,
      payload: 'AA8723'
    });
  });

});
