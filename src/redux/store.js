import { combineReducers, createStore } from 'redux';
import authReducer from '../reducers/authReducer';
import chatReducer from '../reducers/chatReducer';

const rootReducer = combineReducers({ user: authReducer, chat: chatReducer });
export const store = createStore(rootReducer);
