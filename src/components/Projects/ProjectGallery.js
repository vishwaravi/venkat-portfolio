import React from 'react'
import { useParams } from 'react-router-dom';
import "./ImageGallery.css";
import { imageCollections } from "./imagedata"

console.log(imageCollections.centrifugal);

export const ProjectGallery = () => {

    const { category } = useParams();
    console.log(category)
    const images = imageCollections[category] || [];

    return (
        <div className="gallery-container">
            <div className="gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={image.caption} className="gallery-image" />
                        {/* <p className="gallery-caption">{image.caption}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}