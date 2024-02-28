import React, { useEffect, useRef } from "react";
import { Team } from "./style";
import teamImg from "../../../assets/images/teamImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();

  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
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
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = titleRef.current;
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
  }, []);

  return (
    <Team>
      <Team.Container>
        <Team.Wrapper>
          <Team.TexBox ref={titleRef}>
            <Team.Title>{t("home.team.title")}</Team.Title>
            <Team.Desc>{t("home.team.desc")}</Team.Desc>
          </Team.TexBox>
          <Team.ImageBox ref={imgRef}>
            <Team.Img src={teamImg} alt="image heroes game" />
          </Team.ImageBox>
        </Team.Wrapper>
      </Team.Container>
    </Team>
  );
};

export default TeamSection;
