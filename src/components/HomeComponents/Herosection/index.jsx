import React, { useEffect, useRef } from "react";
import { HeroStyle, HeroVideo } from "./style";
import videoSource from "../../../assets/images/bgvideo.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import border from '../../../assets/icons/border.svg'
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const imgRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    const elVideo = videoRef.current;

    gsap.set(el, { scale: 1, transformOrigin: "center center",borderRadius: '100px',});
    gsap.to(el, {
      scale: 0,
      borderRadius: '100px',
      duration: 10,
      ease: "power2.out",
      delay: 10,
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(elVideo, {
      borderRadius: "100px",
      duration: 10,
      ease: "power2.out",
      delay: 10,
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <HeroStyle ref={imgRef} id="herosection">
      <HeroVideo autoPlay loop muted ref={videoRef}>
        <source src={videoSource} type="video/mp4" />
      </HeroVideo>
      <HeroStyle.Container>
        <HeroStyle.Textbox>
          <HeroStyle.Title>
          {t("home.hero.title")}{" "}
            <HeroStyle.ColorTitle>{t("home.hero.titlePie")}</HeroStyle.ColorTitle>
          </HeroStyle.Title>
          <HeroStyle.Desc>
          {t("home.hero.desc")}
          </HeroStyle.Desc>
          <HeroStyle.Btn onClick={() =>navigate('/contact') }>{t("home.header.nav.contactUs")}</HeroStyle.Btn>
          <img src={border} alt="border" className="border" /> 
        </HeroStyle.Textbox>
      </HeroStyle.Container>
    </HeroStyle>
  );
};

export default Hero;
