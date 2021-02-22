import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "../styles/Request.module.css";
import SwiperCore, { Navigation } from "swiper";
import { formatNumber } from "../utils/Formatter";

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
          <div className="d-flex align-item-center ml-3">
            <div className={`${Styles.RequestImageContainer}`}>
              <img
                src={item.picture}
                alt="name"
                className={`${Styles.RequestImage} `}
              />
            </div>
            <div className="info__avatar pl-3">
              <span className=" d-block" style={{ fontSize: ".9rem" }}>
                {i + 1}
              </span>
              <div className="d-flex align-items-center mt-2 justify-content-start">
                <span className="profile__title d-block">
                  &#8358; {formatNumber(item.tuition_fees)}
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
