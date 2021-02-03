import React from 'react'

import './styles.css'

const Stats = ({ stats }) => {
    if (!stats) {
        //loading not yet started
        return <span className="stats">Loading...</span>
    }
    return (
        <span className="stats">
            {stats.error && 'Error...'}
            {stats.loading && 'Loading...'}
            {stats.downloads !== null && `${stats.downloads} downloads`}
        </span>
    )
}
export default Stats