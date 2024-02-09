import React, { useEffect, useRef } from 'react';
import {MakeStyle} from './style'
import makeImg from '../../../assets/images/makeImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MakesSec = () => {
     
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
        end: "center center",
        scrub: true, 
      },
    });
  }, []);

  return (
    <MakeStyle>
      <MakeStyle.Container>
        <MakeStyle.Wrapper>
          <MakeStyle.TextBox>
            <MakeStyle.Title>
            What makes us stand up
            </MakeStyle.Title>
            <MakeStyle.Desc>
            Explore a world of possibilities with our forward-thinking IT strategies. Our team of experts harnesses the latest technologies to ensure your business not only keeps pace but stays ahead of the curve.
            </MakeStyle.Desc>
          </MakeStyle.TextBox>
          <MakeStyle.ImgBox ref={imgRef}>
            <MakeStyle.Img src={makeImg} alt='image heros'/>
          </MakeStyle.ImgBox>
        </MakeStyle.Wrapper>
      </MakeStyle.Container>
    </MakeStyle>
  )
}

export default MakesSec;

