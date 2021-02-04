import { runSaga } from 'redux-saga' //to make assertions on fake store
import { getPage, handleImagesLoad } from '../imagesSaga'

test('selector gives back the page', () => {
    const nextPage = 1
    const state = { nextPage }
    const res = getPage(state)
    expect(res).toBe(nextPage)

})

test('should load images and handle them in case of success', async () => {
    //dispatched actions
    const dispatchedActions = []

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action)
    }
    await runSaga(fakeStore, handleImagesLoad).done
    console.log(dispatchedActions)
    //make assertions on data




})