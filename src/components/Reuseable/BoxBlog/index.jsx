import React from "react";
import { BoxStyle } from "./style";

const BoxBlog = ({ title, desc, imageSrc, backgroundImage }) => {
  return (
    <BoxStyle>
      <BoxStyle.Container>
        <BoxStyle.Wrapper bgimage={backgroundImage}>
          <BoxStyle.TextBox>
            <BoxStyle.Title>{title}</BoxStyle.Title>
            <BoxStyle.Desc>{desc}</BoxStyle.Desc>
          </BoxStyle.TextBox>
          <BoxStyle.ImgBox>
            <BoxStyle.Img src={imageSrc} />
          </BoxStyle.ImgBox>
        </BoxStyle.Wrapper>
      </BoxStyle.Container>
    </BoxStyle>
  );
};

export default BoxBlog;
