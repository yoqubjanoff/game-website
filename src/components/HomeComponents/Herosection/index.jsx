import React, { useEffect, useRef } from "react";
import { HeroStyle, HeroVideo } from "./style";
import videoSource from "../../../assets/images/bgvideo.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import border from "../../../assets/icons/border.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null); 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    const elVideo = videoRef.current;

    ScrollTrigger.matchMedia({
      "(max-width: 2960px)": function () {
      gsap.to(el, {
        scale: 0.6,
        borderRadius: "100px",
        duration: 10,
        ease: "power2.out",
        delay: 10,
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: "+=800",
          scrub: 2,
        },
      });}
    })
    ScrollTrigger.matchMedia({
      "(max-width: 776px)": function () {
      gsap.to(el, {
        scale: 0.6,
        borderRadius: "50px",
        duration: 2,
        ease: "power4.out",
        delay: 10,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          toggleActions: "play none reverse none",
        },
      });}
    })

    gsap.set(el, {
      scale: 1,
      scrub: 1,
    });
    

    gsap.set(elVideo, {
      scale: 1,
      scrub: 1,
    });

    gsap.to(elVideo, {
      borderRadius: "100px",
      duration: 5,
      ease: "power2.out",
      delay: 5,
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: "+=800",
        scrub: 2,
      },
    });

    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <HeroStyle ref={imgRef} id="herosection">
      <HeroVideo autoPlay loop muted ref={videoRef}>
        <source src={videoSource} type="video/mp4" />
      </HeroVideo>
      <HeroStyle.Container>
        <HeroStyle.Textbox>
          <div className="titlebox">
          <HeroStyle.Title ref={titleRef}>
            {t("home.hero.title")}{" "}
            <HeroStyle.ColorTitle>
              {t("home.hero.titlePie")}
            </HeroStyle.ColorTitle>
          </HeroStyle.Title>
          </div>
          <HeroStyle.Desc>{t("home.hero.desc")}</HeroStyle.Desc>
          <HeroStyle.Btn onClick={() => navigate("/contact")}>
            {t("home.header.nav.contactUs")}
          </HeroStyle.Btn>
          <img src={border} alt="border" className="border" />
        </HeroStyle.Textbox>
      </HeroStyle.Container>
    </HeroStyle>
  );
};

export default Hero;
