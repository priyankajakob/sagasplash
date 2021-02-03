import { call, put, take, takeEvery } from 'redux-saga/effects' //gives us back object

//worker saga
function* workerSaga() {
    console.log('Hey from worker saga')
    console.log(put({ type: 'ACTION_FROM_WORKER' }))
    // The library provides, for this purpose, another function put which creates the dispatch Effect.
    yield put({ type: 'ACTION_FROM_WORKER' })
}

function* byebyeSaga() {
    console.log("bye bye saga")
}

//watcher saga
/*
  Starts workerSaga on each dispatched `HELLO` action..
*/
function* rootSaga() {
    // yield takeEvery('HELLO', workerSaga)
    // takeEvery is the most familiar and provides a behavior similar to redux-thunk
    /*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

    yield take('LOGIN')
    yield call(workerSaga)
    //above puts saga in control that it pulls the action only once
    // yield take('ADD_TO_CART')
    // yield take('BUY')
    //above and below will be possible only once user is logged in -- that is saga will only handle then
    yield take('LOGOUT')
    yield call(byebyeSaga)
}

//watcher saga -> actions -> worker saga    

export default rootSaga