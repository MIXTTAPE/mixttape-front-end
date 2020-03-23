

const initialState = {
  loading: false
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return { loading: true };
    default:
      return state;
  }
};
