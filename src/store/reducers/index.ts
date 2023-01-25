// Reducer

import {combineReducers} from 'redux';

import authReducer from './auth';
import customDrawerReducer from './customDrawer';
import matrixReducer from "./matrix";
import performerProfileReducer from './performerProfile';
import profileReducer from "./profile";

const appReducer = combineReducers({
  auth: authReducer,
  matrix:matrixReducer,
  profile:profileReducer,
  performerProfile:performerProfileReducer,
  customDrawer:customDrawerReducer
});

const reducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default reducer;
