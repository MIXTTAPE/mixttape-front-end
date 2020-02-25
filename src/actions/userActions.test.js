import { SET_USER, setUserLoading, SET_USER_LOADING, userLoadingDone, USER_LOADING_DONE, setUserSignup } from './userActions';

jest.mock('../services/auth.js');

describe('userActions', () => {
  
  // it('can set the user', () => {
  //   const payload = {
  //     username: 'josephtatum',
  //     passwordHash: '31415926540'
  //   };
  //   const action = setUser(payload);
  //   expect(action).toEqual({
  //     type: SET_USER,
  //     payload
  //   });
  // });

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
});

it('creates an action to set the user', () => {
  const dispatch = jest.fn();
  const action = setUserSignup('mockUserSignUp', 'blah');

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
