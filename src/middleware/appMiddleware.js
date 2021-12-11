import { getDataPart, getUserData } from '../api/api';
import {
  INITIALIZE_APP,
  loadUserDataAC,
  updateChatAC,
} from '../actions/actions';
import { store } from '../redux/store';

function appMiddleware() {
  return next => action => {
    switch (action.type) {
      case INITIALIZE_APP:
        store.dispatch(loadUserDataAC(getUserData()));
        store.dispatch(updateChatAC(getDataPart(-20)));
        break;
      default:
        break;
    }

    return next(action);
  };
}

export default appMiddleware;
