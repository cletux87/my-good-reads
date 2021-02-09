import React from 'react';
import './flipimage.scss';

type FlipImageProps = {
    image: string,
    header: string,
    content: string
}

const FlipImage = (props: FlipImageProps) =>{

    const { image, header, content } = props;

    return (
        <div className="flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img src={image} alt="Paris" />
                </div>
                <div className="flip-box-back">
                    <h2>{header}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipImage;