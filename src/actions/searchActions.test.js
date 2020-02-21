import { ADD_SONG, addSong } from './searchActions';

describe('Search Actions', () => {

  it('can add a song to a mixtape', () => {
    const action = addSong('AA8723');
    expect(action).toEqual({
      type: ADD_SONG,
      payload: 'AA8723'
    });
  });
});
