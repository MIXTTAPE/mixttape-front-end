export const getUserMixtapes = state => state.userInfo.mixtapes;
export const getUser = state => state.userInfo.user;
export const getError = state => state.userInfo.error;
export const getUserLoading = state => state.userInfo.loading;
export const isAuthenticated = state => !!getUser(state);
