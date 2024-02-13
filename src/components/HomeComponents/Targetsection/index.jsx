import React, { useEffect, useRef } from "react";
import { TargetStyle } from "./styl";
import targetImg from '../../../assets/images/targetImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";


const Target = () => {
  const { t } = useTranslation();
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
    <TargetStyle>
      <TargetStyle.Container>
        <TargetStyle.Wrapper>
          <TargetStyle.TextBox>
            <TargetStyle.Title>{t("home.target.title")}{" "}</TargetStyle.Title>
            <TargetStyle.Desc>
            {t("home.target.desc")}
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
