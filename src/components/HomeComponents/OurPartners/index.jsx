import React from "react";
import { OurStyle } from "./style";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import partners1 from "../../../assets/images/partners1.png";
import partners2 from "../../../assets/images/partners2.png";
import partners3 from "../../../assets/images/partners3.png";
import partners4 from "../../../assets/images/partners4.png";
import partners5 from "../../../assets/images/partners5.png";

const OurPartner = () => {
  return (
    <OurStyle>
      <OurStyle.Container>
        <OurStyle.Wrapper>
          <OurStyle.Title>Our Partners</OurStyle.Title>
          <OurStyle.CarouselBox>
            <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
              effect={"coverflow"} 
              grabCursor
              centeredSlides={true}
              loop={true}
              slidesPerView={7}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              spaceBetween={50}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <OurStyle.Img src={partners1} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners2} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners3} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners3} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners5} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners3} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners2} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners4} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners5} />
              </SwiperSlide>
              <SwiperSlide>
                <OurStyle.Img src={partners1} />
              </SwiperSlide>
            </Swiper>
            <div className="slider-controler">
              <div className="swiper-button-prev slide-arrow">
                
              </div>
              <div className="swiper-button-next slide-arrow">
                
              </div>
            </div>
          </OurStyle.CarouselBox>
        </OurStyle.Wrapper>
      </OurStyle.Container>
    </OurStyle>
  );
};

export default OurPartner;
