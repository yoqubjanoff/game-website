import styled from "styled-components";
import bgimage from "../../../assets/images/targetBg.png";

export const TargetStyle = styled.section`
  width: 100%;
  padding: 80px 0;
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

TargetStyle.Container = styled.div`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  padding: 0 15px;
`;

TargetStyle.Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

TargetStyle.TextBox = styled.div`
  width: 100%;
  max-width: 668px;
`;
TargetStyle.Title = styled.h3`
  color: #fff;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
`;

TargetStyle.Desc = styled.p`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
`;

TargetStyle.ImgBox = styled.div``;

TargetStyle.Img = styled.img`
  width: 100%;
  max-width: 754px;
`;
