import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { activeMixtapeReducer } from './activeMixtapeReducer';
import { editedMixtapeReducer } from './editedMixtapeReducer';

export default combineReducers({
  userReducer,
  activeMixtapeReducer,
  editedMixtapeReducer,
});
