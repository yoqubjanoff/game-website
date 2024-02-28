import styled from "styled-components";
import bgImg from "../../../assets/images/numSecBgImg.jpg";

export const NumStyle = styled.section`
  width: 100%;
  padding: 100px 0;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
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

NumStyle.Container = styled.div`
  width: 100%;
  max-width: 1217px;
  margin: 0 auto;
  padding: 0 15px;
`;

NumStyle.Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 776px) {
   flex-direction: column;
   gap: 35px;
  }
`;
NumStyle.NumBox = styled.li`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 776px) {
   align-items: center;
  }
`;
NumStyle.Num = styled.p`
  color: #fff;
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
  @media only screen and (max-width: 776px) {
  font-size: 60px;
   
  }
`;
NumStyle.Title = styled.p`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`;
