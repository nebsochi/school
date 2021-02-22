import { useContext } from "react";
import { PublishContext } from "../../context/PublishContext";
import BookItem from "./BookItem";
import Styles from "../../styles/Publish.module.css";

function BookList({ handleBookClick }) {
  const { books } = useContext(PublishContext).contextValue;

  return (
    <div className="row align-items-stretch booklist">
      {books.map((item, i) => (
        <div
          className={`col-6 col-sm-4 col-xs-6 mb-3 col-lg-6 col-xl-4`}
          key={item.id}
        >
          <div className={Styles.PublishItem}>
            <BookItem
              bg={"bg-white"}
              item={item}
              number={i}
              handleBookClick={handleBookClick}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
