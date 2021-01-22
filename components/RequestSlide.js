import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "../styles/Request.module.css";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

function RequestSlide({ cswiper, childrenData }) {
  return (
    <Swiper
      loop={false}
      autoplay={false}
      navigation={false}
      navigation
      onSwiper={(swiper) => {
        cswiper(swiper);
      }}
      slidesPerView={1}
    >
      {childrenData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="d-flex align-item-start ml-3">
            <div className={`${Styles.RequestImageContainer} border`}>
              <img
                src={item.picture}
                alt="name"
                className={`${Styles.RequestImage} `}
              />
            </div>
            <div className="info__avatar pl-3">
              <span
                style={{ textTransform: "uppercase" }}
                className="d-block profile__status"
              >
                Name
              </span>
              <span className=" d-block">{item.full_name}</span>
              <div className="d-flex align-items-center mt-2 justify-content-start">
                <span
                  style={{ textTransform: "uppercase", minWidth: "auto" }}
                  className="d-block profile__status"
                >
                  Fees:{" "}
                </span>
                <span className="profile__title d-block">
                  &nbsp;&#x20A6;{item.tuition_fees}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RequestSlide;
