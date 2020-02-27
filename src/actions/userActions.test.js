import { SET_USER, setUserLoading, SET_USER_LOADING, userLoadingDone, USER_LOADING_DONE, setUserSignUp, setUserLogin, verifyUser, SET_USER_MIXTAPES, SET_DELETE_TAPE, deleteUserTape } from './userActions';
import { SET_MIXTAPE_LOADING } from './editedMixtapeActions';

jest.mock('../services/auth.js');
jest.mock('../services/mixtapeApi.js');

describe('userActions', () => {

  it('can set user loading', () => {
    const action = setUserLoading();
    expect(action).toEqual({
      type: SET_USER_LOADING
    });
  });

  it('can reset user loading', () => {
    const action = userLoadingDone();
    expect(action).toEqual({
      type: USER_LOADING_DONE
    });
  });

  it('creates an action to set the user via sign up', () => {
    const dispatch = jest.fn();
    const action = setUserSignUp('mockUserSignUp', 'blah');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: { username: 'mockUserSignUp' }
        });
      });
  });
  
  it('creates an action to set the user via login', () => {
    const dispatch = jest.fn();
    const action = setUserLogin('mockUserLogin', 'blah');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: {
            username: 'mockUserLogin',
            mixtapes: []
          } });
      });
  });

  it('creates an action to verify a user', () => {
    const dispatch = jest.fn();
    const action = verifyUser();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: { user: { username: 'mockUserVerified' } }
        });
      });
  });

  it('can delete a mixtape', () => {
    const dispatch = jest.fn();
    const payload = '5e5810c5a205cba1fe5424a1';
    const action = deleteUserTape(payload);

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_DELETE_TAPE,
          payload
        });
      });
  });
});
