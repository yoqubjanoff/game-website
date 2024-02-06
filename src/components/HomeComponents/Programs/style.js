import styled from "styled-components";
import bgimage from "../../../assets/images/programsBg.jpg";

export const ProgStyle = styled.section`
  width: 100%;
  padding: 60px 0;
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
`;

ProgStyle.Container = styled.div`
  width: 100%;
  max-width: 1820px;
  margin: 0 auto;
  padding: 0 15px;
`;
ProgStyle.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .main-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .items {
    width: 283px;
    height: 215px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .items::after,
  .items::before {
    content: "";
    position: absolute;
    background-image: conic-gradient(
      transparent,
      #00f6ff,
      transparent,
      #00f6ff
    );
    width: 353px;
    height: 355px;
    animation: animate 6s linear infinite;
    box-shadow: 0 0 20px rgba(0, 246, 255, 0.5); 
    z-index: -1;
  }

  .items::before {
    animation-delay: -3s;
  }

  .items-img {
    position: absolute;
    width: 278px;
    height: 210px;
    top: 3px;
    bottom: 0;
    left: 2px;
    right: 0;
    z-index: 1;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .items:nth-child(1)::after,
  .items:nth-child(1)::before {
    animation-delay: -3s;
  }

  .items:nth-child(2)::after,
  .items:nth-child(2)::before {
    animation-delay: -2s;
  }

  .items:nth-child(3)::after,
  .items:nth-child(3)::before {
    animation-delay: -1s;
  }

  .items:nth-child(4)::after,
  .items:nth-child(4)::before {
    animation-delay: 0s;
  }

  .items:nth-child(5)::after,
  .items:nth-child(5)::before {
    animation-delay: 1s;
  }

  .items:nth-child(6)::after,
  .items:nth-child(6)::before {
    animation-delay: 2s;
  }
`;
ProgStyle.Title = styled.h3`
  width: 100%;
  max-width: 750px;
  text-align: center;
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0.56px;
  margin-bottom: 44px;
`;
ProgStyle.ImgBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
ProgStyle.Items = styled.li`
  width: 100%;
  max-width: 283px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: -10px;
    background: conic-gradient(
      #00f6ff 125deg,
      #00f6ff 50deg,
      transparent 100deg
    );
    backdrop-filter: blur(15px);
    z-index: -1;
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

ProgStyle.Img = styled.img`
  width: 100%;
`;
