import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Styles from "../styles/Modal.module.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "NGN",
  }).format(value);

function StudentList({ StudentData }) {
  return (
    <div id="c-swiper">
      <Swiper
        loop={false}
        autoplay={false}
        navigation={false}
        navigation
        slidesPerView={"auto"}
      >
        {StudentData?.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="d-flex bg-white shado-sm border px-3 py-1 align-items-center mr-3"
              style={{ borderRadius: "7px" }}
            >
              <div
                className={`${Styles.ModalAvatar} ${Styles.ModalAvatarSmall}`}
              >
                <img
                  src={item.picture || "user.svg"}
                  width="100%"
                  alt="student"
                />
              </div>
              <div className="pl-3">
                <span
                  className="text-capitalize d-block"
                  style={{ fontSize: "0.9rem" }}
                >
                  {item.full_name}
                </span>
                <h6 className="m-0">{numberFormat(item.tuition_fees)}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StudentList;
