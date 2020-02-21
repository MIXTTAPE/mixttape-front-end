import { setAsActive, setSongIndex } from '../actions/activeMixtapeActions';
import { activeMixtapeReducer } from './activeMixtapeReducer';

describe('activeMixtapeReducer', () => {

  it('can handle a SET_AS_ACTIVE case', () => {
    const state = {};
    const mixtape = {
      mixtapeName: 'My Mixtape',
      songs: [],
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    };
    const newState = activeMixtapeReducer(state, setAsActive(mixtape));
    expect(newState).toEqual({
      createdBy: 'josephtatum',
      currentSongIndex: 0,
      mixtapeName: 'My Mixtape',
      songs: []
    });
  });

});
