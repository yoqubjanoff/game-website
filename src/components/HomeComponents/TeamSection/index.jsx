import React, { useEffect, useRef } from 'react'
import { Team } from './style';
import teamImg from '../../../assets/images/teamImg.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TeamSection = () => {
    
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
    <Team ref={sectionRef}>
        <Team.Container>
            <Team.Wrapper>
                <Team.TexBox>
                    <Team.Title>Best Team</Team.Title>
                    <Team.Desc>
                    Explore a world of possibilities with our forward-thinking IT strategies. Our team of experts harnesses the latest technologies to ensure your business not only keeps pace but stays ahead of the curve.
                    </Team.Desc>
                </Team.TexBox>
                <Team.ImageBox>
                    <Team.Img src={teamImg} alt='image heroes game'/>
                </Team.ImageBox>
            </Team.Wrapper>
        </Team.Container>
    </Team>
  )
}

export default TeamSection;

