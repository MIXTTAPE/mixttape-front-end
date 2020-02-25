import { ADD_SONG, DELETE_SONG, SAVE_MIXTAPE, addSong, deleteSong, saveMixtape, setAsEdited, SET_AS_EDITED, setMixtapeLoading, SET_MIXTAPE_LOADING, mixtapeLoadingDone, MIXTAPE_LOADING_DONE } from './editedMixtapeActions';

jest.mock('../services/mixtapeApi.js');

describe('editedMixtapeActions', () => {

  it('can create an action to set mixtape loading state', () => {
    const action = setMixtapeLoading();
    expect(action).toEqual({
      type: SET_MIXTAPE_LOADING
    });
  });

  it('can create an action to reset mixtape loading state', () => {
    const action = mixtapeLoadingDone();
    expect(action).toEqual({
      type: MIXTAPE_LOADING_DONE
    });
  });

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

  it('can save the mixtape being edited', () => {
    const dispatch = jest.fn();
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

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_MIXTAPE_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SAVE_MIXTAPE,
          payload
        });
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
