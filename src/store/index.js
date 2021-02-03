import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
    sagaMiddleware.run(rootSaga)
    store.dispatch({ type: 'HELLO' }) //// watcher Saga: watches on HELLO actions and triggers worker saga
    store.dispatch({ type: 'HELLO' })
    return store
}

export default configureStore