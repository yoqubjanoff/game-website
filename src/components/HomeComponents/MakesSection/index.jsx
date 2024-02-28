import React, { useEffect, useRef } from 'react';
import {MakeStyle} from './style'
import makeImg from '../../../assets/images/makeImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

const MakesSec = () => {
  const {t} = useTranslation()
     
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    gsap.set(el, { opacity: 0, transformOrigin: "bottom bottom", y:350});
    gsap.to(el, {
      opacity: 1,
      y: 0, 
      duration: 3,
      ease: "power2.out",
      delay: 1,
      scrollTrigger: {
        trigger: el,
        start: "center bottom",
        end: "center center",
        scrub: true, 
      },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = titleRef.current;
    gsap.set(el, { opacity: 0, transformOrigin: "bottom bottom", y:350});
    gsap.to(el, {
      opacity: 1,
      y: 0, 
      duration: 3,
      ease: "power2.out",
      delay: 1,
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
          <MakeStyle.TextBox ref={titleRef}>
            <MakeStyle.Title >
            {t('home.makes.title')}
            </MakeStyle.Title>
            <MakeStyle.Desc>
            {t('home.makes.desc')}
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

