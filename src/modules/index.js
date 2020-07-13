import { combineReducers } from 'redux';
import modal from './modal';
import theme from './theme';

const rootReducer = combineReducers({
  modal,
  theme,
});

export default rootReducer;
