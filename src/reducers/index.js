import { combineReducers } from 'redux';
import { userReducer as user } from './userReducer';
import { activeMixtapeReducer  as activeMixtape } from './activeMixtapeReducer';
import { editedMixtapeReducer as lastEditedMixtape } from './editedMixtapeReducer';

export default combineReducers({
  user,
  activeMixtape,
  lastEditedMixtape,
});
