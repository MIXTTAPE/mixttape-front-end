import { setUser, SET_USER } from './userActions';

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
});
