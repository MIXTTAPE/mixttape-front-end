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

export function verify() {
  return Promise.resolve({
    user: { username: 'mockUserVerified' }
  });
}
