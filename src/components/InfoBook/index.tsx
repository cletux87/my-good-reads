import React, {useEffect} from "react";
import * as Utils from '../../Utils';
import "./InfoBook.scss";

const InfoBook = (props: any) => {

  const {book} = props;

  useEffect(()=>{
    console.log(book);
  }, []);

  return (
    <div className="infoBookContainer">
      <h1>{book.volumeInfo.title}</h1>
      <div className="infoBookContent">
        <div className='infoBookImage'>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="Book Cover"/>
          <span>ISBN:{
            !Utils.isNil(book.volumeInfo.industryIdentifiers) && book.volumeInfo.industryIdentifiers.length > 0 ?
              book.volumeInfo.industryIdentifiers[0].identifier
              : ''
            }
          </span>
          <span>Category:{
            !Utils.isNil(book.volumeInfo.categories) && book.volumeInfo.categories.length > 0?
              book.volumeInfo.categories[0]:
              ''
           }
          </span>
          <span>By:{
            !Utils.isNil(book.volumeInfo.authors) && book.volumeInfo.authors.length > 0?
              book.volumeInfo.authors[0]
              : ''
            }
          </span>
        </div>
        <div className='infoBookDescription'>
          <label>{book.volumeInfo.description}</label>
        </div>
      </div>
      <a className="infoBookPreview" href={book.volumeInfo.previewLink} target="_blank">Check Preview</a>
    </div>
  );
};

export default InfoBook;

