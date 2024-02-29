import React, { useEffect, useRef, useState } from "react";
import { TargetStyle } from "./styl";
import targetImg from "../../../assets/images/targetImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

const Target = () => {
  const { t } = useTranslation();
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 840);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;

    if (isWideScreen) {
      gsap.set(el, { opacity: 0, transformOrigin: "center center", y: 250 });
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
    } else {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    }
  }, [isWideScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 840);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWideScreen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const title = titleRef.current;

    if (isWideScreen) {
      gsap.set(title, { opacity: 0, transformOrigin: "center center", y: 250 });
      gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power2.out",
        delay: 10,
        scrollTrigger: {
          trigger: title,
          start: "center bottom",
          end: "center center",
          scrub: true,
        },
      });
    } else {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    }
  }, [isWideScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 840);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TargetStyle>
      <TargetStyle.Container>
        <TargetStyle.Wrapper>
          <TargetStyle.TextBox ref={titleRef}>
            <TargetStyle.Title>{t("home.target.title")} </TargetStyle.Title>
            <TargetStyle.Desc>{t("home.target.desc")}</TargetStyle.Desc>
          </TargetStyle.TextBox>
          <TargetStyle.ImgBox ref={imgRef}>
            <TargetStyle.Img src={targetImg} alt="image heroe game" />
          </TargetStyle.ImgBox>
        </TargetStyle.Wrapper>
      </TargetStyle.Container>
    </TargetStyle>
  );
};

export default Target;
