import { request } from './request.js';

export const postTape = (mixtape) => {
  return request('/mixtapes/', 'POST', mixtape);
};

export const fetchTape = (mixtapeId) => {
  return request(`/mixtapes/${mixtapeId}/`, 'GET');
};

export const deleteTape = (mixtapeId) => {
  return request(`/mixtapes/${mixtapeId}/`, 'POST', mixtapeId);
};
