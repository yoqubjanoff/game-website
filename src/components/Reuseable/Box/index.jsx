import React, { useEffect, useState } from "react";
import { BoxStyle } from "./style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import tempImg from "../../../assets/images/box1.jpg";

const Box = ({ title, desc, imageSrc, backgroundImage, videoId }) => {
  let videoIdFromUrl;
  if (videoId) {
    videoIdFromUrl = videoId.includes("youtu.be")
      ? videoId.split("/").pop()
      : videoId.split("v=").pop();
  }
  return (
    <BoxStyle>
      <BoxStyle.Container>
        <BoxStyle.Wrapper bgimage={imageSrc ? backgroundImage : tempImg}>
          <BoxStyle.TextBox>
            <BoxStyle.TextBox>
              {<BoxStyle.Title>{title}</BoxStyle.Title>}
              {<BoxStyle.Desc>{desc}</BoxStyle.Desc>}
            </BoxStyle.TextBox>
          </BoxStyle.TextBox>
          <BoxStyle.ImgBox>
            {imageSrc ? (
              <BoxStyle.Img src={imageSrc} />
            ) : (
                <iframe
                  className="ytb"
                  src={`https://www.youtube.com/embed/${videoIdFromUrl}?autoplay=1&loop=1&mute=1`}
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

export default Box;
