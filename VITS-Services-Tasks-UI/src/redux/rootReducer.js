import { combineReducers } from 'redux';
import tasks from '../modules/tasks';

const rootReducer = combineReducers({
  [tasks.constants.Name]: tasks.reducer
});

export default rootReducer;