import { useContext } from "react";
import { PublishContext } from "../../context/PublishContext";
import BookItem from "./BookItem";
import Styles from "../../styles/Publish.module.css";

function BookList({ editModal }) {
  const { books } = useContext(PublishContext).contextValue;

  const handleBookClick = (e) => {
    e.preventDefault();
    console.log("was clicked");
  };

  return (
    <div className="row">
      {books.map((item) => (
        <div
          className={`col-6 mb-3 col-md-4 col-lg-3 ${Styles.PublishItem}`}
          key={item.id}
        >
          <BookItem
            bg={"bg-white"}
            item={item}
            handleBookClick={handleBookClick}
          />
        </div>
      ))}
    </div>
  );
}

export default BookList;
