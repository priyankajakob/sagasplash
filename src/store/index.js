import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas/index'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
    sagaMiddleware.run(rootSaga)
    // store.dispatch({ type: 'HELLO' }) //// watcher Saga: watches on HELLO actions and triggers worker saga
    // store.dispatch({ type: 'LOGOUT' }) //nothing happens as user is not logged in
    // store.dispatch({ type: 'LOGIN' })
    // store.dispatch({ type: 'LOGOUT' })

    // store.dispatch({ type: 'DANG' })
    return store
}

export default configureStore