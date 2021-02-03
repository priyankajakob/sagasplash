import { combineReducers } from 'redux'

import loadingReducer from './loadingReducer'
import imagesReducer from './imagesReducer'
import errorsReducer from './errorsReducer'
import pageReducer from './pageReducer'


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorsReducer,
    nextPage: pageReducer
})

export default rootReducer