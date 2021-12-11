import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from '../reducers/authReducer';
import chatReducer from '../reducers/chatReducer';
import chatMiddleware from '../middleware/chatMiddleware';
import authMiddleware from '../middleware/authMiddleware';

const rootReducer = combineReducers({ user: authReducer, chat: chatReducer });
export const store = createStore(
  rootReducer,
  applyMiddleware(chatMiddleware, authMiddleware),
);
