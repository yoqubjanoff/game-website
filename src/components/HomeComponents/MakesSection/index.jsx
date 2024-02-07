import React, { useEffect, useRef } from 'react';
import {MakeStyle} from './style'
import makeImg from '../../../assets/images/makeImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MakesSec = () => {
     
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
          <MakeStyle.ImgBox>
            <MakeStyle.Img src={makeImg} alt='image heros'/>
          </MakeStyle.ImgBox>
        </MakeStyle.Wrapper>
      </MakeStyle.Container>
    </MakeStyle>
  )
}

export default MakesSec;

