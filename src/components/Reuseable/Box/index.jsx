import React from "react";
import { BoxStyle } from "./style";

const Box = ({ title, desc, imageSrc }) => {
  return (
    <BoxStyle>
      <BoxStyle.Container>
        <BoxStyle.Wrapper>
          <BoxStyle.TextBox>
            <BoxStyle.Title>{title}</BoxStyle.Title>
            <BoxStyle.Desc>{desc}</BoxStyle.Desc>
          </BoxStyle.TextBox>
          <BoxStyle.ImgBox>
            <BoxStyle.Img src={imageSrc} alt={title} />
          </BoxStyle.ImgBox>
        </BoxStyle.Wrapper>
      </BoxStyle.Container>
    </BoxStyle>
  );
};

export default Box;


