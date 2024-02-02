import React from "react";
import { TargetStyle } from "./styl";
import targetImg from '../../../assets/images/targetImg.png'

const Target = () => {
  return (
    <TargetStyle>
      <TargetStyle.Container>
        <TargetStyle.Wrapper>
          <TargetStyle.TextBox>
            <TargetStyle.Title>Who we are?</TargetStyle.Title>
            <TargetStyle.Desc>
              Explore a world of possibilities with our forward-thinking IT
              strategies. Our team of experts harnesses the latest technologies
              to ensure your business not only keeps pace but stays ahead of the
              curve.
            </TargetStyle.Desc>
          </TargetStyle.TextBox>
          <TargetStyle.ImgBox>
            <TargetStyle.Img src={targetImg}/>
          </TargetStyle.ImgBox>
        </TargetStyle.Wrapper>
      </TargetStyle.Container>
    </TargetStyle>
  );
};

export default Target;

