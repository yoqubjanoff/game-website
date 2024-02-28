import React, { useEffect, useState } from "react";
import { BoxStyle } from "./style";
import "react-loading-skeleton/dist/skeleton.css";
import tempImg from "../../../assets/images/box1.jpg";
import Skeleton from "react-loading-skeleton";

const Box = ({ title, desc, imageSrc, backgroundImage, videoId }) => {
  let videoIdFromUrl;
  if (videoId) {
    videoIdFromUrl = videoId.includes("youtu.be")
      ? videoId.split("/").pop()
      : videoId.split("v=").pop();
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imageSrc || videoIdFromUrl) {
      setLoading(false);
    }
  }, [imageSrc, videoIdFromUrl]);

  return (
    <BoxStyle>
      <BoxStyle.Container>
        <BoxStyle.Wrapper bgimage={imageSrc ? backgroundImage : tempImg}>
          <BoxStyle.TextBox>
            <BoxStyle.TextBox>
              {loading ? (
                <Skeleton width={"100%"} height={90} />
              ) : (
                <BoxStyle.Title>{title}</BoxStyle.Title>
              )}

              {loading ? (
                <Skeleton width={"100%"} height={5} count={10} />
              ) : (
                <BoxStyle.Desc>{desc}</BoxStyle.Desc>
              )}
            </BoxStyle.TextBox>
          </BoxStyle.TextBox>
          <BoxStyle.ImgBox>
            {loading ? (
              <Skeleton
                width={"100%"}
                height={"100%"}
                className="custom-skeleton-img"
              />
            ) : imageSrc ? (
              <BoxStyle.Img src={imageSrc} />
            ) : (
              <iframe
                className="ytb"
                src={`https://www.youtube.com/embed/${videoIdFromUrl}?autoplay=1&loop=1&mute=1`}
                title="YouTube video"
                frameborder="0"
                allow="autoplay; encrypted-media"
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
