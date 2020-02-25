export function signUp() {
  return Promise.resolve(
    { username: 'mockUserSignUp' }
  );
}

export function login() {
  return Promise.resolve(
    { username: 'mockUserLogin', mixtapes: [] }
  );
}

export function auth() {
  return Promise.resolve(
    { username: 'mockedUserVerified' }
  );
}
