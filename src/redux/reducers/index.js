import {combineReducers} from 'redux';
import AuthReducers from './AuthReducers';
import DataReducers from './DataReducers';

export default combineReducers({
  authResponse: AuthReducers,
  dataResponse: DataReducers,
});
