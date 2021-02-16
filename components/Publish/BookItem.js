import React from "react";
import Styles from "../../styles/Publish.module.css";
import { formatNumber } from "../../utils/Formatter";

function BookItem({ item, handleBookClick, bg, number }) {
  return (
    <div className={`pb-3`}>
      <div
        className={`d-flex border justify-content-center bg-white rounded align-items-center position-relative ${Styles.PublishImgContainer}`}
      >
        <a
          href=""
          className={` ${bg} d-flex align-items-center bg-light justify-content-center text-center`}
          style={{ width: "100%", height: "100%" }}
          onClick={(e) => handleBookClick(e, item, number)}
        >
          <img
            src={item?.primary_picture || item?.picture}
            alt="book"
            className={Styles.PublishItemImg}
            height={"100%"}
            width={"auto"}
          />
        </a>
      </div>
      <div>
        <a
          href="#"
          className="pt-2 d-block"
          style={{ fontSize: ".86rem", textDecoration: "none" }}
          onClick={(e) => handleBookClick(e, item, number)}
        >
          {item.name}
        </a>
        <h6
          className={`pt-2 ${Styles.PublishCurrency}`}
          style={{ fontWeight: "600" }}
        >
          &#x20A6;&nbsp;
          {formatNumber(item?.price) + ".00"}
        </h6>
      </div>
    </div>
  );
}

export default BookItem;
