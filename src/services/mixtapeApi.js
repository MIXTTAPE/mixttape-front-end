import { request } from './request.js';

export const postTape = (mixtape) => {
  return request('/mixtapes/', 'POST', mixtape);
};
