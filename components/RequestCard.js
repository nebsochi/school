import { useState, useContext, useEffect } from "react";
import RequestSlide from "../components/RequestSlide";
import Link from "next/link";
import { useRouter } from "next/router";

function RequestCard({ item, setIsOpen, isOpen, detailData, setDetailData }) {
  const [swiper, setswiper] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setDetailData({ ...detailData, ...item });
    router.push("/request", `/request/details/${item.parent.full_name}`);
  };

  return (
    <div className="col-lg-3 col-md-6  mb-4">
      <div
        className="p-3 border bg-white position-relative"
        style={{ borderRadius: "16px" }}
      >
        <div
          className="position-absolute"
          style={{ top: ".0rem", right: ".3rem" }}
        >
          <span className="badge badge-pill badge-danger">
            {item.children.length}
          </span>
        </div>
        <div
          className="d-flex py-1 align-items-center"
          style={{ minHeight: "36px" }}
        >
          <div className="square__avatar">
            <img
              src={item.parent.picture || "user.svg"}
              height="40"
              alt="user"
            />
          </div>
          <div className="info__avatar pl-2">
            <span className="profile__title d-block">
              {item.parent.full_name}
            </span>
            <span
              style={{ textTransform: "lowercase" }}
              className="d-block profile__status"
            >
              {item.children.length} Student(s)
            </span>
          </div>
        </div>

        <div>
          <div className="pt-3 border-top mt-4 mb-3 border-bottom pb-4 d-flex align-item-start position-relative">
            <RequestSlide
              cswiper={(cswiper) => {
                setswiper({ swiper: cswiper });
              }}
              childrenData={item.children}
            />
          </div>
        </div>

        <a
          className="btn btn-outline btn-primary btn-primary--sh-none  btn-block btn-md "
          style={{
            minWidth: "100%",

            fontSize: ".8rem",
            color: "#ffffff",
            background: "#0062cc",
            marginTop: "1.7rem",
            marginBottom: "1rem",
          }}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          View details
        </a>
      </div>
    </div>
  );
}

export default RequestCard;