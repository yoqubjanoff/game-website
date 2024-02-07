import React, { useEffect, useRef } from "react";
import { TargetStyle } from "./styl";
import targetImg from '../../../assets/images/targetImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Target = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    gsap.set(el, { opacity: 0, transformOrigin: "center center", y:250});
    gsap.to(el, {
      opacity: 1,
      y: 0, 
      duration: 3,
      ease: "power2.out",
      delay: 10,
      scrollTrigger: {
        trigger: el,
        start: "center bottom",
        end: "bottom center",
        scrub: true, 
      },
    });
  }, []);
  
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
          <TargetStyle.ImgBox ref={imgRef}>
            <TargetStyle.Img src={targetImg} alt='image heroe game'/>
          </TargetStyle.ImgBox>
        </TargetStyle.Wrapper>
      </TargetStyle.Container>
    </TargetStyle>
  );
};

export default Target;
