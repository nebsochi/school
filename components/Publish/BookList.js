import Image from "next/image";
import Styles from "../../styles/Publish.module.css";
import BookItem from "./BookItem";

function BookList({ data }) {
  return (
    <div className="row">
      {data.map((item, i) => (
        <BookItem data={item} i={i} key={item.id} />
      ))}
    </div>
  );
}

export default BookList;
