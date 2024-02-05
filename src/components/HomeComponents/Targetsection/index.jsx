import React, { useEffect, useRef } from "react";
import { TargetStyle } from "./styl";
import targetImg from '../../../assets/images/targetImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Target = () => {
  const sectionRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    gsap.set(el, { scale: 1, transformOrigin: "center center", });
    gsap.to(el, {
      scale: 0,
      borderRadius: 150,
      duration: 3,
      ease: "power2.out", 
      delay: 10, 
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    },);
  }, []);
  return (
    <TargetStyle ref={sectionRef}>
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
            <TargetStyle.Img src={targetImg} alt='image heroe game'/>
          </TargetStyle.ImgBox>
        </TargetStyle.Wrapper>
      </TargetStyle.Container>
    </TargetStyle>
  );
};

export default Target;

