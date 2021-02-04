import { runSaga } from 'redux-saga' //to make assertions on fake store

import { getPage, handleImagesLoad } from '../imagesSaga'
import { setImages, setImagesError } from '../../actions'

import * as api from '../../api'

test('selector gives back the page', () => {
    const nextPage = 1
    const state = { nextPage }
    const res = getPage(state)
    expect(res).toBe(nextPage)

})

test('should load images and handle them in case of success', async () => {
    //dispatched actions
    const dispatchedActions = []

    //so we are not doing api call and mocking result as mockedImages one
    const mockedImages = ['abc', 'def']
    api.fetchImages = jest.fn(() => Promise.resolve(mockedImages))

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action)
    }
    await runSaga(fakeStore, handleImagesLoad).done
    //console.log(dispatchedActions) //[ { type: 'IMAGES_LOAD_SUCCESS', images: [ 'abc', 'def' ] } ]

    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setImages(mockedImages))
})


test('should handle errors in case of fail', async () => {
    //dispatched actions
    const dispatchedActions = []
    const mockedImagesError = 'some error is thrown'
    api.fetchImages = jest.fn(() => Promise.reject(mockedImagesError))

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action)
    }
    await runSaga(fakeStore, handleImagesLoad).done

    expect(api.fetchImages.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setImagesError(mockedImagesError))
})