export const SET_USER = 'SET_USER';
export const setUser = (payload) => ({
  type: SET_USER,
  payload
});

export const SET_USER_LOADING = 'SET_USER_LOADING';
export const setUserLoading = () => ({
  type: SET_USER_LOADING
});

export const USER_LOADING_DONE = 'USER_LOADING_DONE';
export const userLoadingDone = () => ({
  type: USER_LOADING_DONE
});
