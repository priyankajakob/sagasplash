import { IMAGES } from '../constants'

export const loadImages = () => {
    return {
        type: IMAGES.LOAD
    }
}

export const setImages = () => ({
    type: IMAGES.LOAD_SUCCESS
})

export const setError = () => ({
    type: IMAGES.LOAD_FAIL
})