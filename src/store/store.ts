import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './effects';
import { Middleware, Dispatch, AnyAction, MiddlewareAPI } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const logger: Middleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware,logger),
});

// Run the root saga to initialize sagas
sagaMiddleware.run(rootSaga);

export default store;