import React, { useEffect, useRef } from "react";
import { ProgStyle } from "./style";
import progImg1 from "../../../assets/images/programs1.jpg";
import progImg2 from "../../../assets/images/programs2.png";
import progImg3 from "../../../assets/images/programs3.jpg";
import progImg4 from "../../../assets/images/programs4.jpg";
import progImg5 from "../../../assets/images/programs5.jpg";
import progImg6 from "../../../assets/images/programs6.jpg";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Programs = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();



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
    <ProgStyle>
      <ProgStyle.Container>
        <ProgStyle.Wrapper>
          <ProgStyle.Title>{t("home.program.title")}</ProgStyle.Title>
          <ul className="main-items">
            <li className="items">
              <img className="items-img" src={progImg1} alt="image framer" />
            </li>
            <li className="items">
              <img className="items-img" src={progImg2} alt="image framer" />
            </li>
            <li className="items">
              <img className="items-img" src={progImg3} alt="image framer" />
            </li>
            <li className="items">
              <img className="items-img" src={progImg4} alt="image framer" />
            </li>
            <li className="items">
              <img className="items-img" src={progImg5} alt="image framer" />
            </li>
            <li className="items">
              <img className="items-img" src={progImg6} alt="image framer" />
            </li>
          </ul>
        </ProgStyle.Wrapper>
      </ProgStyle.Container>
    </ProgStyle>
  );
};

export default Programs;
