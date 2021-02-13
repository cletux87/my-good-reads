import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as BookActions from "../../service/book-search/book-search-actions";
import { emptyValues } from '../../service/book-search/book-search-reducer';
import * as WishListActions from "../../service/ui/ui-actions";
import Popup from '../Popup';
import InfoBook from '../InfoBook';
import "./WishListBarStyles.scss";

interface Props {
  position: string;
}

function WishListBar(props: Props) {
  const { position } = props;
  const [showBook, setShowBook] = useState(false);
  const [indexBook, setIndexBook] = useState(emptyValues);
  const listOfBooks = useSelector((state: any) => state.booksReducer);
  const dispatch = useDispatch();

  function remove(id: string, wishIndex: number) {
    if (wishIndex === 0 && position === "responsiveMobile") {
      dispatch(BookActions.removeBookFromWishList(id));
      dispatch(WishListActions.changeMobileFavorites());
    }
    return dispatch(BookActions.removeBookFromWishList(id));
  }

  function openModal(index:number){
    setIndexBook(listOfBooks.myFavorites[index]);
    setShowBook(true);
  }

  return (
    <div>
      { showBook ? <Popup closed={()=>setShowBook(false)} ><InfoBook book={indexBook}/></Popup> : null }
      <div data-cy={`wishListBar:${position}`} className="wishListBar">
        {listOfBooks.myFavorites.map((data: any, index: number) => (
          <div
            data-cy={`wishListElementIndex:${index}`}
            className="item"
            key={index}
          >
            <div className="bookTitle" onClick={()=> openModal(index)}>{data.volumeInfo.title}</div>
            <div className="buttonContainer">
              <button
                data-cy={`wishListRemoveButton:${index}`}
                className="itemButtonS"
                onClick={() => remove(data.id, index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishListBar;
