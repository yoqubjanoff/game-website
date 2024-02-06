import React from "react";
import { BoxStyle } from "./style";

const Box = ({ title, desc, imageSrc, backgroundImage }) => {
  return (
    <BoxStyle>
      <BoxStyle.Container>
        <BoxStyle.Wrapper backgroundImage={backgroundImage}>
          <BoxStyle.TextBox>
            <BoxStyle.Title>{title}</BoxStyle.Title>
            <BoxStyle.Desc>{desc}</BoxStyle.Desc>
          </BoxStyle.TextBox>
          <BoxStyle.ImgBox>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZG9MF5agh7A"
              title="Unity vs Unreal: Which Engine Should You Choose As A Beginner"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                border: "none", // stilni o'zgartirish
                borderRadius: "20px", // stilni o'zgartirish
              }}
            ></iframe>
          </BoxStyle.ImgBox>
        </BoxStyle.Wrapper>
      </BoxStyle.Container>
    </BoxStyle>
  );
};

export default Box;
