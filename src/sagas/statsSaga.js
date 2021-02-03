import { take, fork, call, put } from "redux-saga/effects";
import { IMAGES, STATS } from '../constants'
import { loadStats, setStats, setImagesStatsError } from '../actions'

import { fetchImagesStats } from '../api'

function* handleImagesStatsRequest(id) {
    // console.log('fetching stats for id', id)

    //using redux saga we can retry edge cases
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadStats(id))
            const stats = yield call(fetchImagesStats, id)
            yield put(setStats(id, stats.downloads.total))
            return true //so that it doesn't retry in case of success
        } catch (err) { }
    }

    yield put(setImagesStatsError(id))
}

export default function* watchImagesStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS)

        // images.forEach(image => {
        //     yield fork(handleImagesStatsRequest, image.id) //fork is non blocking
        // }) -- can't call yield inside forEach

        for (let i = 0; i < images.length; i++) {
            yield fork(handleImagesStatsRequest, images[i].id)
        }
    }

}