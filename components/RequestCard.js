import { useState, useContext, useEffect } from "react";
import RequestSlide from "../components/RequestSlide";
import { ApiContext } from "../context/ApiContext";
import Styles from "../styles/Request.module.css";

function RequestCard() {
  const { getRequest } = useContext(ApiContext).api;
  const [data, setData] = useState([]);

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NGN",
    }).format(value);

  useEffect(() => {
    getRequest(1)
      .then((data) => setData([...data.data]))
      .catch((err) => console.log(err));
  }, []);

  const [swiper, setswiper] = useState(false);

  return data.map((item) => (
    <div className="col-md-4 mb-4">
      <div
        className="bg-white shadow-sm border p-4"
        style={{ borderRadius: "16px" }}
      >
        <div
          className="d-flex align-items-center"
          style={{ minHeight: "36px" }}
        >
          <div className="square__avatar">
            <img
              src={item.parent.picture || "user.svg"}
              height="40"
              alt="user"
            />
          </div>
          <div className="info__avatar pl-3">
            <span className="profile__title d-block">
              {item.parent.full_name}
            </span>
            <span
              style={{ textTransform: "lowercase" }}
              className="d-block profile__status"
            >
              {item.parent.email}
            </span>
          </div>
        </div>
        <div className=" border-top mt-4 pt-2">
          <ul className="m-0 p-0 ">
            <li className="d-flex align-items-start profile__list py-2">
              <span className="profile__status profile__status--larger pt-1">
                Phone:
              </span>
              <span className="profile__title profile__title--light">
                {item.parent.phone}
              </span>
            </li>
            <li className="d-flex align-items-start profile__list">
              <span className="profile__status profile__status--larger pt-1">
                Amount applied:
              </span>
              <span className="profile__title ml-3">
                {numberFormat(item.total_amount)}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="border-bottom pb-2 mt-4 profile__title profile__title--light">
            Student(s) {item.children.length}
          </h6>
          <div className="pt-2 d-flex align-item-start position-relative">
            {/* {swiper && (
              <>
                <img
                  src="arr-left.svg"
                  className={`${Styles.RequestControl} position-absolute`}
                  alt="control"
                  onClick={() => {
                    swiper.swiper.slidePrev();
                  }}
                />
                <img
                  src="arr-right.svg"
                  className={`${Styles.RequestControl} ${Styles.RequestControlRight} position-absolute`}
                  alt="control"
                  onClick={() => {
                    swiper.swiper.slideNext();
                  }}
                />
              </>
            )} */}

            <RequestSlide
              cswiper={(cswiper) => {
                setswiper({ swiper: cswiper });
              }}
              childrenData={item.children}
            />
          </div>
        </div>

        <button
          className="btn btn-outline btn-primary--sh-none mt-4 btn-block btn-md "
          style={{
            minWidth: "100%",
            borderRadius: "30px",
            fontSize: ".8rem",
            color: "#ffffff",
            background: "#0062cc",
          }}
        >
          View details
        </button>
      </div>
    </div>
  ));
}

export default RequestCard;
