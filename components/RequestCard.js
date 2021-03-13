import { useState, useContext, useEffect } from "react";
import RequestSlide from "../components/RequestSlide";
import { useRouter } from "next/router";
import { ModalContext } from "../context/ModalContext";
import { formatNumber } from "../utils/Formatter";

function RequestCard({ item, setIsOpen, detailData, setDetailData }) {
  const [swiper, setswiper] = useState(false);
  const router = useRouter();
  const { getRequestById } = useContext(ModalContext).contextValue;

  const handleClick = (e) => {
    e.preventDefault();
    setDetailData({ ...detailData, ...item });
    setIsOpen(true);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4">
      <div className="p-3 shadow-sm bg-white position-relative rounded-lg">
        <div
          className="position-absolute"
          style={{ top: ".0rem", right: ".3rem" }}
        >
          <span className="badge badge-pill badge-danger">
            {item?.children?.length}
          </span>
        </div>
        <div
          className="d-flex py-1 align-items-center"
          style={{ minHeight: "36px" }}
        >
          <div
            className="square__avatar position-relative d-flex align-items-center justify-content-center"
            style={{ height: "36px", width: "36px" }}
          >
            <img
              src={item?.parent?.picture || "user.svg"}
              height="100%"
              alt="user"
            />
          </div>
          <div className="info__avatar pl-2" style={{ width: "80%" }}>
            <span className="profile__title d-block text-truncate">
              &#8358; {formatNumber(item.loan_amount)}
            </span>
            <span
              style={{ textTransform: "lowercase" }}
              className="d-block profile__status"
            >
              {item?.children?.length} Student(s)
            </span>
          </div>
        </div>

        <div>
          <div
            className="pt-3 border-top mt-4 mb-3 border-bottom pb-3 position-relative"
            style={{ minHeight: "90px" }}
          >
            <RequestSlide childrenData={item?.children} />
          </div>
        </div>

        <a
          className="btn btn-outline btn-primary btn-primary--sh-none btn-block btn-md "
          style={{
            minWidth: "100%",
            fontSize: ".8rem",
            color: "#ffffff",
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
