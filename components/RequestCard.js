import { useState, useContext, useEffect } from "react";
import RequestSlide from "../components/RequestSlide";
import { useRouter } from "next/router";
import { ModalContext } from "../context/ModalContext";

function RequestCard({ item, setIsOpen, detailData, setDetailData }) {
  const [swiper, setswiper] = useState(false);
  const router = useRouter();
  const { getRequestById } = useContext(ModalContext).contextValue;

  const handleClick = (e) => {
    e.preventDefault();
    const response = getRequestById(item.id).then((data) =>
      setDetailData({ ...detailData, ...data?.data?.loan_request })
    );
    setIsOpen(true);

    // router.push("/request", `/request/details/${item.parent.full_name}`);
  };

  return (
    <div className="col-lg-4 col-xl-3 col-md-6  mb-4">
      <div
        className="p-3 border bg-white shadow-sm position-relative"
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
          <div
            className="pt-3 border-top mt-4 mb-3 border-bottom pb-3 position-relative"
            style={{ minHeight: "90px" }}
          >
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
