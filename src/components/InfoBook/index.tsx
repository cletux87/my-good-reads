import React, {useEffect} from "react";
import * as Utils from '../../Utils';
import { InfoBookType } from '../../service/book-search/book-search-reducer';
import "./InfoBook.scss";

interface InfoBookProps{
  book: InfoBookType,
}

const InfoBook = (props: InfoBookProps) => {

  const {book} = props;

  return (
    <section className="infoBookContainer">
      <h1>{book.volumeInfo.title}</h1>
      <article className="infoBookContent">
        <div className='infoBookImage'>
          <img 
            src={Utils.isNil(book.volumeInfo.imageLinks.smallThumbnail)
              ? "images/noImage.png"
              :book.volumeInfo.imageLinks.smallThumbnail } 
            alt="Book Cover"
          />
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
      </article>
      <a className="infoBookPreview" href={book.volumeInfo.previewLink} target="_blank">Check Preview</a>
    </section>
  );
};

export default InfoBook;

