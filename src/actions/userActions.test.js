import { setUser, SET_USER, setUserLoading, SET_USER_LOADING, userLoadingDone, USER_LOADING_DONE } from './userActions';

describe('userActions', () => {
  
  it('can set the user', () => {
    const payload = {
      username: 'josephtatum',
      passwordHash: '31415926540'
    };
    const action = setUser(payload);
    expect(action).toEqual({
      type: SET_USER,
      payload
    });
  });

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
