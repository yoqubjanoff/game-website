import styled from "styled-components";
import boxImg3 from "../../assets/images/boxImg2.jpg";

export const ContactStyle = styled.section`
  padding: 208px 0 40px 0;
  background-color:  #041122;
`;

ContactStyle.Container = styled.div`
  width: 100%;
  max-width: 1345px;
  height: 700px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 250%;
    height: 250%;
    animation: animate 12s linear infinite;
  }

  &::before {
    animation-delay: -4s;
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

ContactStyle.Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  width: 99.5%;
  height: 99.2%;
  background-image: url(${boxImg3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: calc(50% - 50px), calc(50% - 50px);
`;
ContactStyle.InfoBox = styled.div`
  width: 100%;
  max-width: 606px;
  height: 100%;
  padding: 30px;
`;
ContactStyle.MainItems = styled.ul``;
ContactStyle.Items = styled.li`
  width: 100%;
  &:nth-child(2) {
    margin-bottom: 15px;
  }
  &:nth-child(3) {
    display: flex;
    gap: 21px;
    margin-bottom: 15px;
  }
  &:nth-child(4) {
    margin-bottom: 25px;
  }
  &:nth-child(5) {
    margin-bottom: 82px;
    cursor: pointer;
  }
  &:nth-child(6) {
    width: 100%;
    max-width: 547px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 24px;
    .socbox {
      display: flex;
      gap: 6px;
    }
    .soc-link {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0.32px;
      position: relative;
    }
  }
`;

ContactStyle.Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 20px;
`;
ContactStyle.Iput1 = styled.input`
  outline: none;
  width: 100%;
  padding: 21px 0 20px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &::placeholder {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
ContactStyle.Iput4 = styled.textarea`
  width: 100%;
  height: 160px;
  outline: none;
  padding: 18px 0 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &::placeholder {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
ContactStyle.Btn = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 20px 0 18px;
  border: 1.2px solid #fff;
  background: radial-gradient(
    289.94% 116.98% at 50% 62.22%,
    #00f6ff 0%,
    #11c0c7 92.4%
  );
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
ContactStyle.MapBox = styled.div`
  width: 100%;
  max-width: 738px;
`;
