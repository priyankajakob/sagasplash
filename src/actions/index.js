import { IMAGES, STATS } from '../constants'

export const loadImages = () => {
    return {
        type: IMAGES.LOAD
    }
}

export const setImages = (images) => ({
    type: IMAGES.LOAD_SUCCESS,
    images
})

export const setImagesError = (error) => ({
    type: IMAGES.LOAD_FAIL,
    error
})

export const loadStats = () => {
    return {
        type: STATS.LOAD
    }
}

export const setStats = (stats) => ({
    type: STATS.LOAD_SUCCESS,
    stats
})

export const setStatsError = (error) => ({
    type: STATS.LOAD_FAIL,
    error
})