import styled from "styled-components";
import bgImg from "../../../assets/images/makeBgimg.png";

export const MakeStyle = styled.section`
position: relative;
  width: 100%;
  padding: 160px 0 205px 0;
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

MakeStyle.Container = styled.div`
  width: 100%;
  max-width: 1780px;
  margin: 0 auto;
  padding: 0 15px;
`;
MakeStyle.Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

`;
MakeStyle.TextBox = styled.div`
  width: 100%;
  max-width: 687px;
`;
MakeStyle.Title = styled.h3`
  width: 100%;
  max-width: 529px;
  color: #fff;
  font-size: calc(24px + 40 * (100vw / 1800));
  font-style: normal;
  font-weight: 800;
  line-height: 70px;
  letter-spacing: 1.2px;
`;

MakeStyle.Desc = styled.p`
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
`;
MakeStyle.ImgBox = styled.div`
position: relative;
width: 100%;
max-width: 996px;

`;
MakeStyle.Img = styled.img`
position: absolute;
top: -100px;
left: -18px;
width: 100%;
height: 550px;
`;
