import { enableAllPlugins } from 'immer';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    loading,
});

export function* rootSaga() {
    yield enableAllPlugins([authSaga()]);
}

export default rootReducer;