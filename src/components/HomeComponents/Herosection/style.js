import styled from "styled-components";

export const HeroStyle = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

HeroStyle.Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 15px;
`;

HeroStyle.Textbox = styled.div`
  width: 100%;
  max-width: 880px;
  position: relative;
  padding-top: 170px;
  .first-img {
    cursor: pointer;
  }
  .second-img {
    position: absolute;
    top: 545px;
    left: -6px;
    z-index: -1;
    
  }
`;

HeroStyle.Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 70px;
  font-style: normal;
  font-weight: bold;
  line-height: 95px;
`;

HeroStyle.ColorTitle = styled.span`
  color: #00f6ff;
  font-size: 70px;
  font-style: normal;
  font-weight: 900;
  line-height: 95px;
`;
HeroStyle.Desc = styled.p`
  width: 100%;
  max-width: 675px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  line-height: 35px;
  opacity: 0.8;
  margin-bottom: 40px;
`;

HeroStyle.BtnTitle = styled.span`
  position: absolute;
  color: #fff;
  top: 555px;
  right: 715px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const HeroVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  top: 0;
  object-fit: fill;
  z-index: -1;
`;
