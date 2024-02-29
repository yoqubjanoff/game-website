import React, { useEffect, useState } from "react";
import { OurStyle } from "./style";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import request from "../../../services/request";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const OurPartner = () => {
  const { t } = useTranslation();
  const [our, setOur] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await request.get(`/public/partners`);
      setOur(res?.data?.data);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: t("adminPage.ertitle"),
        text: t("adminPage.errore"),
      });
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <OurStyle>
      <OurStyle.Container>
        <OurStyle.Wrapper>
          <OurStyle.Title>{t("home.our.title")}</OurStyle.Title>
          <OurStyle.CarouselBox>
            <Swiper
            
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                EffectCoverflow,
              ]}
              
              effect="coverflow"
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
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: false }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 40
                },
                840: {
                  slidesPerView: 5,
                  spaceBetween: 45
                },
                1040: {
                  slidesPerView: 6,
                  spaceBetween: 55
                },
                1350: {
                  slidesPerView: 7,
                  spaceBetween: 55
                }
              }}
            >
              {our.map((partner) => (
                <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: " center",
                  justifyContent: "center",
                }}
                key={partner.id}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={partner.partnerPhotoUrl}
                      alt={partner.id}
                      width={"283px"}
                      height={"215px"}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </OurStyle.CarouselBox>
        </OurStyle.Wrapper>
      </OurStyle.Container>
    </OurStyle>
  );
};

export default OurPartner;
