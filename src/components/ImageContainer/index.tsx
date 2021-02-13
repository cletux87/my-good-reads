
import React from "react";
import './imageContainer.scss';

interface Props{
    alt: string,
    imageSource: string,
    onClick: Function
}

const ImageContainer = (props:Props) => {
    const { imageSource, alt, onClick} = props;
    return (
      <div className='imageContainer' onClick={() => onClick()}>
          <img src={imageSource} alt={alt} />
      </div>
    );
  };
  
  export default ImageContainer;