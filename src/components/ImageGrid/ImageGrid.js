import React, { Component } from 'react';

import { connect } from 'react-redux'

import { loadImages } from '../../actions'
import './styles.css';

import Stats from '../Stats'

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

// class ImageGrid extends Component {
// state = {
//     images: [],
// };

// componentDidMount() {
//     fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
//         .then(res => res.json())
//         .then(images => {
//             this.setState({
//                 images,
//             });
//         });
// }
class ImageGrid extends Component {

    componentDidMount() {
        this.props.loadImages()
    }
    render() {
        const { images, error, loadImages, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <a onClick={loadImages}>Load Images</a>
                    {error && <div className="error">{JSON.stringify(error)}</div>}
                </section>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    const { isLoading, images, error, imageStats } = state
    return {
        isLoading,
        images,
        error,
        imageStats
    }
}

const mapDisptachToProps = (dispatch) => ({
    loadImages: () => dispatch(loadImages())
})

export default connect(mapStateToProps, mapDisptachToProps)(ImageGrid);
