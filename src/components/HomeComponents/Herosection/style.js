import styled from "styled-components";

export const HeroStyle = styled.section`
  width: 100%;
  height: 100vh;
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
  max-width: 929px;
  position: relative;
  padding-top: 170px;
  @media only screen and (max-width: 1100px) {
    padding-top: 0px;
  }
  
  .first-img {
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .border {
    position: absolute;
    width: 229px;
    height: 56px;
    bottom: -8px;
    left: -10px;
    z-index: -1;
  }

  .titlebox{
    @media only screen and (max-width: 776px) {
    margin-bottom: 15px;
  }
  }
`;

HeroStyle.Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: calc(24px + 46 * (100vw / 1800));
  font-style: normal;
  font-weight: bold;
  
`;

HeroStyle.ColorTitle = styled.span`
  width: 100%;
  color: #00f6ff;
  font-size: calc(24px + 46 * (100vw / 1800));
  font-style: normal;
  font-weight: 900;
  @media only screen and (max-width: 1100px) {
 

  }
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

HeroStyle.Btn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 229px;
  height: 58px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background-image: radial-gradient(
    289.94% 116.98% at 50% 62.22%,
    #00f6ff 0%,
    #11c0c7 92.4%
  );
  border: none;
  border-radius: 9px;
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 80% 100%, 0 100%, 0 39%);
  transition: background-image 0.8s ease-in-out, fill 0.8s ease-in-out;
  &:hover {
    bottom: -8px;
    left: -11px;
    background-image: radial-gradient(
      289.94% 116.98% at 50% 62.22%,
      #11c0c7 0%,
      #00f6ff 56.71%
    );
  }
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
