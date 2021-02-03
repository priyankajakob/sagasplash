import { takeEvery, put } from 'redux-saga/effects'
import { IMAGES } from '../constants'

//worker saga
function* handleImagesLoad() {
    console.log('fetching images')
    // yield put({ type: IMAGES.LOAD_SUCCESS })
}

function* dangWorker() {
    console.log('DANG!!')
}

//watcher saga
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
    yield takeEvery('DANG', dangWorker)
    //above is non blocking saga execution or like tasks happening in parallel not waiting for in order to complete
}

export default rootSaga