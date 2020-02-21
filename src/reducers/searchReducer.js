import { ADD_SONG } from '../actions/searchActions';

const initialState = {
  mixtape: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_SONG:
      return { ...state, mixtape: [...state.mixtape, action.payload] };
  }
}
