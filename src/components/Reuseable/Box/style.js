import styled from "styled-components";
import bgimage from "../../../assets/images/box1.jpg";

export const BoxStyle = styled.section`
  width: 100%;
`;

BoxStyle.Container = styled.div`
  width: 100%;
  max-width: 1930px;
  margin: 0 auto;
  padding: 0 15px;
`;

BoxStyle.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: calc(50% - -934px) calc(50% - -307px);
  background-color: rgba(4, 17, 34, 0.5);
  backdrop-filter: blur(15px);
  padding: 80px 202px 80px 190px;
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
`;
BoxStyle.Title = styled.h3`
  color: #fff;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  margin-bottom: 15px;
`;
BoxStyle.Desc = styled.p`
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
`;
BoxStyle.ImgBox = styled.div`
  width: 100%;
  max-width: 738px;
`;
BoxStyle.Img = styled.img`
  width: 100%;
`;
