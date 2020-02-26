import { SET_USER, setUserLoading, SET_USER_LOADING, userLoadingDone, USER_LOADING_DONE, setUserSignUp, setUserLogin, verifyUser, VERIFY_USER } from './userActions';

jest.mock('../services/auth.js');

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

  it('creates an action to verify the user', () => {
    const dispatch = jest.fn();
    const action = verifyUser();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: { username: 'mockedUserVerified' }
        });
      });
  });
});
