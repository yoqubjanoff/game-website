import styled from "styled-components";
import bgimage from "../../../assets/images/teamBg.jpg";
export const Team = styled.section`
  width: 100%;
  padding: 168px 0 287px 0;
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

Team.Container = styled.div`
  width: 100%;
  max-width: 1550px;
  margin: 0 auto;
  padding: 0 15px;
`;
Team.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
Team.TexBox = styled.div`
  width: 100%;
  max-width: 668px;
`;
Team.Title = styled.h3`
  color: #fff;
  font-size: calc(24px + 40 * (100vw / 1800));
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  margin-bottom: 15px;
`;
Team.Desc = styled.p`
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
`;
Team.ImageBox = styled.div`
  width: 100%;
  max-width: 851px;
  position: relative;
`;
Team.Img = styled.img`
  width: 100%;
  position: absolute;
  top: -85px;
`;
