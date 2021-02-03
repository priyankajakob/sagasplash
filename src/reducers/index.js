import { combineReducers } from 'redux'

import loadingReducer from './loadingReducer'
import imagesReducer from './imagesReducer'
import errorsReducer from './errorsReducer'


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorsReducer
})

export default rootReducer