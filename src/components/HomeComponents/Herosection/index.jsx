import React, { useEffect, useRef } from "react";
import { HeroStyle, HeroVideo } from "./style";
import videoSource from "../../../assets/images/bgvideo.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const imgRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = imgRef.current;
    const elVideo = videoRef.current;

    gsap.set(el, { scale: 1, transformOrigin: "center center" });
    gsap.to(el, {
      scale: 0,
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
            Covering every aspect of{" "}
            <HeroStyle.ColorTitle>Game Development</HeroStyle.ColorTitle>
          </HeroStyle.Title>
          <HeroStyle.Desc>
            Explore a world of possibilities with our forward-thinking IT
            strategies. Our team of experts harnesses the latest technologies to
            ensure your business not only keeps pace but stays ahead of the
            curve.
          </HeroStyle.Desc>
          <HeroStyle.BtnTitle>Contact us</HeroStyle.BtnTitle>
          <svg
            className="first-img"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="56"
            viewBox="0 0 220 56"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.74326 14.777C2.91893 17.136 1.50677 18.3154 0.753383 19.9263C0 21.5372 0 23.3771 0 27.057V40C0 47.5425 0 51.3137 2.34315 53.6569C4.68629 56 8.45753 56 16 56H204C211.542 56 215.314 56 217.657 53.6569C220 51.3137 220 47.5425 220 40V16C220 8.45753 220 4.68629 217.657 2.34315C215.314 0 211.542 0 204 0H29.2382C26.3666 0 24.9308 0 23.6091 0.479356C22.2874 0.958712 21.1854 1.87913 18.9815 3.71996L5.74326 14.777Z"
              fill="url(#paint0_radial_209_8)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_209_8"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(110 34.8445) rotate(106.151) scale(68.0177 287.884)"
              >
                <stop stop-color="#00F6FF" />
                <stop offset="0.923971" stop-color="#11C0C7" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            className="second-img"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="56"
            viewBox="0 0 220 56"
            fill="none"
          >
            <mask id="path-1-inside-1_209_5" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.74327 9.45885C2.91893 11.8178 1.50677 12.9973 0.753383 14.6082C0 16.219 0 18.059 0 21.7389V40C0 47.5425 0 51.3137 2.34315 53.6569C4.68629 56 8.45753 56 16 56H204C211.542 56 215.314 56 217.657 53.6569C220 51.3137 220 47.5425 220 40V16C220 8.45753 220 4.68629 217.657 2.34315C215.314 0 211.542 0 204 0H22.871C19.9994 0 18.5636 0 17.2419 0.479356C15.9202 0.958712 14.8182 1.87913 12.6143 3.71996L5.74327 9.45885Z"
              />
            </mask>
            <path
              d="M12.6143 3.71996L11.9732 2.95245L12.6143 3.71996ZM17.2419 0.479356L17.5828 1.41944L17.2419 0.479356ZM217.657 2.34315L216.95 3.05025L217.657 2.34315ZM217.657 53.6569L216.95 52.9497L217.657 53.6569ZM0.753383 14.6082L1.65921 15.0318L0.753383 14.6082ZM2.34315 53.6569L3.05025 52.9497L2.34315 53.6569ZM1 40V21.7389H-1V40H1ZM204 55H16V57H204V55ZM219 16V40H221V16H219ZM22.871 1H204V-1H22.871V1ZM11.9732 2.95245L5.10222 8.69135L6.38431 10.2264L13.2553 4.48746L11.9732 2.95245ZM22.871 -1C20.0701 -1 18.426 -1.01386 16.9009 -0.460724L17.5828 1.41944C18.7011 1.01386 19.9287 1 22.871 1V-1ZM13.2553 4.48746C15.5135 2.60133 16.4646 1.82502 17.5828 1.41944L16.9009 -0.460724C15.3758 0.0924072 14.1229 1.15693 11.9732 2.95245L13.2553 4.48746ZM221 16C221 12.257 221.002 9.34921 220.698 7.08858C220.39 4.79918 219.752 3.02438 218.364 1.63604L216.95 3.05025C217.905 4.00506 218.438 5.28745 218.716 7.35507C218.998 9.45146 219 12.2005 219 16H221ZM204 1C207.8 1 210.549 1.00212 212.645 1.28398C214.713 1.56196 215.995 2.09545 216.95 3.05025L218.364 1.63604C216.976 0.247697 215.201 -0.390388 212.911 -0.69819C210.651 -1.00212 207.743 -1 204 -1V1ZM204 57C207.743 57 210.651 57.0021 212.911 56.6982C215.201 56.3904 216.976 55.7523 218.364 54.364L216.95 52.9497C215.995 53.9046 214.713 54.438 212.645 54.716C210.549 54.9979 207.799 55 204 55V57ZM219 40C219 43.7995 218.998 46.5485 218.716 48.6449C218.438 50.7126 217.905 51.9949 216.95 52.9497L218.364 54.364C219.752 52.9756 220.39 51.2008 220.698 48.9114C221.002 46.6508 221 43.743 221 40H219ZM1 21.7389C1 17.9658 1.02204 16.3942 1.65921 15.0318L-0.152445 14.1845C-1.02204 16.0439 -1 18.1522 -1 21.7389H1ZM5.10222 8.69135C2.34943 10.9906 0.717147 12.3252 -0.152445 14.1845L1.65921 15.0318C2.29638 13.6695 3.48843 12.6451 6.38431 10.2264L5.10222 8.69135ZM-1 40C-1 43.743 -1.00212 46.6508 -0.69819 48.9114C-0.390388 51.2008 0.247697 52.9756 1.63604 54.364L3.05025 52.9497C2.09545 51.9949 1.56196 50.7126 1.28398 48.6449C1.00212 46.5485 1 43.7995 1 40H-1ZM16 55C12.2005 55 9.45146 54.9979 7.35507 54.716C5.28745 54.438 4.00506 53.9046 3.05025 52.9497L1.63604 54.364C3.02438 55.7523 4.79918 56.3904 7.08858 56.6982C9.34921 57.0021 12.257 57 16 57V55Z"
              fill="white"
              mask="url(#path-1-inside-1_209_5)"
            />
          </svg>
        </HeroStyle.Textbox>
      </HeroStyle.Container>
    </HeroStyle>
  );
};

export default Hero;
