import React from "react";
import './Gallery.scss';

const Gallery = (props) => {
    return (
        <div className={`gallery ${props.className || ''}`}>
            <nav className="gallery__nav">
                <ul className="gallery__nav-list">
                    <li className="gallery__nav-item">
                        all
                    </li>
                    <li className="gallery__nav-item">
                        print template
                    </li>
                    <li className="gallery__nav-item">
                        web template
                    </li>
                    <li className="gallery__nav-item">
                        user interface
                    </li>
                    <li className="gallery__nav-item">
                        mock-up
                    </li>

                </ul>
                <ul className="gallery__content">
                    <li className="gallery__item">
                        <img src={require('../images/1547367999_1.jpg')} alt=""/>
                    </li>
                    <li className="gallery__item"></li>
                    <li className="gallery__item"></li>
                    <li className="gallery__item"></li>
                    <li className="gallery__item"></li>
                    <li className="gallery__item"></li>
                    <li className="gallery__item"></li>
                    <li className="gallery__item"></li>
                </ul>
            </nav>
        </div>
    )
};
export default Gallery;