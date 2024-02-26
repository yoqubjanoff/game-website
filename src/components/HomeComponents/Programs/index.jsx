import React, { useEffect, useRef } from "react";
import { ProgStyle } from "./style";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Programs = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    gsap.set(el, { scale: 1, transformOrigin: "center center" });
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
    });
  }, []);

  return (
    <ProgStyle>
      <ProgStyle.Container>
        <ProgStyle.Wrapper>
          <ProgStyle.Title>{t("home.program.title")}</ProgStyle.Title>
          <ul className="main-items">
            <li className="items">
             <div className="pozitsiya1">
             </div>
            </li>
            <li className="items">
             <div className="pozitsiya2">
             </div>
            </li>
            <li className="items">
             <div className="pozitsiya3">
             </div>
            </li>
            <li className="items">
             <div className="pozitsiya4">
             </div>
            </li>
            <li className="items">
             <div className="pozitsiya5">
             </div>
            </li>
            <li className="items">
             <div className="pozitsiya6">
             </div>
            </li>
          </ul>
        </ProgStyle.Wrapper>
      </ProgStyle.Container>
    </ProgStyle>
  );
};

export default Programs;
