
import React from "react";
import './imageContainer.scss';

interface Props{
    alt: string,
    imageSource: string
}

const ImageContainer = (props:Props) => {
    const { imageSource, alt} = props;
    return (
      <div className='imageContainer'>
        <a href="#">
          <img src={imageSource} alt={alt} />
        </a>
      </div>
    );
  };
  
  export default ImageContainer;