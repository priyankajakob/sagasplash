import { takeEvery, put, call } from 'redux-saga/effects'
import { IMAGES } from '../constants'

//worker saga
function* handleImagesLoad() {
    console.log('fetching images')
    // yield put({ type: IMAGES.LOAD_SUCCESS })
}

//watcher saga
function* rootSaga() {
    // yield takeEvery(IMAGES.LOAD, handleImagesLoad)
    // yield takeEvery('DANG', dangWorker)
    //above is non blocking saga execution or like tasks happening in parallel not waiting for in order to complete

    yield takeEvery(IMAGES.LOAD, handleImagesLoad)


    // yield take('DANG')
    // yield call(dangWorker)
    // yield take(IMAGES.LOAD)
    // yield call(handleImagesLoad)
    // //as per above only if DANG is dispatched IMAGES.LOAD can happen and that too regardless of how many times IMAGES.LOAD happens it will be processed only once

}

export default rootSaga