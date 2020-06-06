import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todoReducer } from './todo/reducers';

export type AppState = ReturnType<typeof todoReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        todoReducer,
        composeWithDevTools(middleWareEnhancer)
    );
}
