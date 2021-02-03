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

export const loadStats = (id) => {
    return {
        type: STATS.LOAD,
        id
    }
}

export const setStats = (id, stats) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads: stats
})

export const setImagesStatsError = (id) => ({
    type: STATS.LOAD_FAIL,
    id
})