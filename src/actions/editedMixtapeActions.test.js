import { ADD_SONG, DELETE_SONG, SAVE_MIXTAPE, addSong, deleteSong, saveMixtape, setAsEdited, SET_AS_EDITED } from './editedMixtapeActions';

describe('editedMixtapeActions', () => {

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

  it('can save a mixtape', () => {
    const payload = {
      mixtapeName: 'My Mixtape',
      createdBy: 'josephtatum',
      songs: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          buyLink: '',
          thumbnail: ''
        }
      ]
    };
    const action = saveMixtape(payload);
    expect(action).toEqual({
      type: SAVE_MIXTAPE,
      payload: {
        mixtapeName: 'My Mixtape',
        createdBy: 'josephtatum',
        songs: [
          {
            nativeId: 'AF607105',
            nativeSource: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            buyLink: '',
            thumbnail: ''
          }
        ]
      }
    });
  });

  it('can set a mixtape as the last edited mixtape', () => {
    const payload = {
      mixtapeName: 'My Mixtape',
      createdBy: 'josephtatum',
      songs: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          buyLink: '',
          thumbnail: ''
        }
      ]
    };
    const action = setAsEdited(payload);
    expect(action).toEqual({
      type: SET_AS_EDITED,
      payload
    });
  });

});