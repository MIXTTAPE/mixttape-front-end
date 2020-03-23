import { combineReducers } from 'redux';
import { userReducer as userInfo } from './userReducer';
import { activeMixtapeReducer  as activeMixtape } from './activeMixtapeReducer';
import { editedMixtapeReducer as lastEditedMixtape } from './editedMixtapeReducer';
import { splashReducer } from './splashReducer';

export default combineReducers({
  userInfo,
  activeMixtape,
  lastEditedMixtape,
  splashReducer,
});
