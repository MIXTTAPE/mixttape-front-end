import { request } from './request.js';

export const postTape = (mixtape) => {
  console.log(mixtape);
  return request('/mixtapes/', 'POST', mixtape)
    .then(res => console.log(res));
};
