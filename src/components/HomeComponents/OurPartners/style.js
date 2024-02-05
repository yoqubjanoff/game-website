import styled from "styled-components";
import bgimage from "../../../assets/images/partnersImg.png";

export const OurStyle = styled.section`
  width: 100%;
  padding: 60px 0 20px 0;
  background-image: url(${bgimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(4, 17, 34, 0.1);
  backdrop-filter: blur(10px);
  margin: 10px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 17, 34, 0.1);
    backdrop-filter: blur(3px);
    z-index: -1;
  }

  .swiper-scrollbar {
  }

  .swiper-scrollbar-horizontal {
    display: none;
  }
  .swiper {
    width: 3500px;
  }
  .swiper-3d {
    perspective: 2201px;
  }
  .swiper-horizontal {
    display: flex;
    justify-content: center;
    gap: 30px;
    height: 283px;
  }
  .swiper-pagination {
    top: 232px;
  }
  .swiper-button-next {
    top: 402px;
    right: 703px;
  }
  .swiper-button-prev {
    top: 402px;
    left: 693px;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
  }
  .swiper-3d .swiper-slide-shadow-right {
    background-image: none !important;
  }
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none !important;
  }
`;

OurStyle.Container = styled.div``;
OurStyle.Wrapper = styled.div``;
OurStyle.Title = styled.h3`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0.56px;
  margin-bottom: 44px;
`;
OurStyle.CarouselBox = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
OurStyle.Items = styled.li``;
OurStyle.Img = styled.img`
  width: 250.093px;
  height: 190px;
`;
