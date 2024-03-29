import styled from "styled-components";

export const BoxStyle = styled.section`
  width: 100%;
  max-width: 1930px;
  height: 610px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background-image: conic-gradient(
      #00f6ff 0deg,
      #00f6ff 90deg,
      transparent 130deg,
      transparent 180deg,
      #00f6ff 180deg,
      #00f6ff 270deg,
      transparent 310deg,
      transparent 360deg
    );
    width: 160%;
    height: 380%;
    animation: animate 12s linear infinite;
    border-radius: 60px;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

BoxStyle.Container = styled.div`
  width: 100%;
  max-width: 1930px;
  margin: 0 auto;
  padding: 0 5px;
`;

BoxStyle.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.bgimage});
  background-repeat: no-repeat;
  background-size: calc(50% - -962px) calc(50% - -310px);
  background-color: rgba(4, 17, 34, 0.5);
  backdrop-filter: blur(15px);
  padding: 80px 152px 80px 150px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 17, 34, 0.1);
    backdrop-filter: blur(15px);
    z-index: -1;
  }
`;
BoxStyle.TextBox = styled.div`
  width: 100%;
  max-width: 670px;
  margin-top: 50px;
  overflow-x: auto;
`;
BoxStyle.Title = styled.h3`
  color: #fff;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  margin-bottom: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
BoxStyle.Desc = styled.p`
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  overflow: auto;
`;
BoxStyle.ImgBox = styled.div`
  width: 100%;
  max-width: 738px;
  height: 450px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-image: conic-gradient(
      transparent,
      transparent,
      #00f6ff,
      transparent,
      transparent,
      #00f6ff
    );
    width: 200%;
    height: 200%;
    animation: animate 12s linear infinite;
    box-shadow: 0 0 20px rgba(0, 246, 255, 0.5);
    z-index: -1;
  }

  &::before {
    animation-delay: -6s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:nth-child(1)::after,
  &:nth-child(1)::before {
    animation-delay: -3s;
  }

  .ytb {
    width: 98.8%;
    height: 98.8%;
    position: absolute;
    top: 3px;
    bottom: 0px;
    left: 5px;
    right: 0;
    z-index: 1;
  }
  .loading {
    width: 98.8%;
    height: 98.8%;
    position: absolute;
    background-color: red;
    top: 3px;
    bottom: 0px;
    left: 5px;
    right: 0;
    z-index: 10;
  }
  .custom-skeleton-img {
    width: 98.8%;
    height: 98.8%;
    position: absolute;
    top: 3px;
    bottom: 0px;
    left: 5px;
    right: 0;
    z-index: 20;
  }
  .react-loading-skeleton::after{
    background: #ccc;
  }
`;
BoxStyle.Img = styled.img`
  width: 98.8%;
  height: 98.8%;
  position: absolute;
  top: 3px;
  bottom: 0px;
  left: 5px;
  right: 0;
  z-index: 1;
`;
