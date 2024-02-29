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
    height: 350px;
    @media only screen and (max-width:475px) {
      gap: 0px;
    }
  }
  .swiper-pagination {
    top: 232px;
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
  .swiper-slide-prev {
    margin-right: 0px;
  }
  .swiper-slide {
    @media only screen and (max-width: 770px) {
      margin-right: 0;
    }
  }
`;

OurStyle.Container = styled.div``;
OurStyle.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
OurStyle.Title = styled.h3`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  font-size: calc(24px + 40 * (100vw / 1800));
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
