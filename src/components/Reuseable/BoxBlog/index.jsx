import React from "react";
import { BoxStyle } from "./style";

const BoxBlog = ({ title, desc, imageSrc, backgroundImage, videoId }) => {
  const videoIdFromUrl = videoId.includes("youtu.be")
    ? videoId.split("/").pop()
    : videoId.split("v=").pop();

  return (
    <BoxStyle>
      <BoxStyle.Container>
        <BoxStyle.Wrapper bgimage={backgroundImage}>
          <BoxStyle.TextBox>
            <BoxStyle.Title>{title}</BoxStyle.Title>
            <BoxStyle.Desc>{desc}</BoxStyle.Desc>
          </BoxStyle.TextBox>
          <BoxStyle.ImgBox>
            {imageSrc ? (
              <BoxStyle.Img src={imageSrc} />
            ) : (
              <iframe
                className="ytb"
                src={`https://www.youtube.com/embed/${videoIdFromUrl}`}
                title="YouTube video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          </BoxStyle.ImgBox>
        </BoxStyle.Wrapper>
      </BoxStyle.Container>
    </BoxStyle>
  );
};

export default BoxBlog;
