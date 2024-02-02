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
`;
ProgStyle.Img = styled.img`
  width: 100%;
`;


