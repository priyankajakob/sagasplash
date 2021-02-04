import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from '../constants'
import { setImages, setImagesError } from '../actions'

import { fetchImages } from '../api'

export const getPage = state => state.nextPage

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage) //selects nextpage from store state variable -- otherway would be to pass the nextpage from component during action dispatch as payload
        // console.log('page', page)
        const images = yield call(fetchImages, page) //fetchImages will return a promise
        yield put(setImages(images))
    }
    catch (err) {
        console.log(err)
        yield put(setImagesError(err.toString()))
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}