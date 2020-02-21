import { setUser } from '../actions/userActions';
import { userReducer } from './userReducer';

describe('userReducer', () => {

  it('can handle a SET_USER case', () => {
    const state = {};
    const user = {
      username: 'josephtatum',
      passwordHash: '31415926540',
      myMixtapes: []
    };
    const newState = userReducer(state, setUser(user));
    expect(newState).toEqual({
      username: 'josephtatum',
      passwordHash: '31415926540',
      myMixtapes: []
    });
  });

});
