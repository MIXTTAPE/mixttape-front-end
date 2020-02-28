import { request } from './request.js';

export const signUp = (username, password) => {
  return request('/auth/signup', 'POST', { username, password });
};

export const login = (username, password) => {
  return request('/auth/login', 'POST', { username, password });
};
export const logout = () => {
  return request('/auth/logout', 'POST');
};

export const verify = () => {
  return request('/auth/verify', 'GET');
};
