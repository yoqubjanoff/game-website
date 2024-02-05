import React, { useEffect, useRef } from 'react'
import { NumStyle } from './style';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NumberSec = () => {
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
          scrub: true,
        },
      },);
    }, []);
   
  return (
    <NumStyle ref={sectionRef}>
        <NumStyle.Container>
            <NumStyle.Wrapper>
                <NumStyle.NumBox>
                   <NumStyle.Num>150</NumStyle.Num> 
                   <NumStyle.Title>Exmployees</NumStyle.Title>
                </NumStyle.NumBox>
                <NumStyle.NumBox>
                   <NumStyle.Num>20</NumStyle.Num> 
                   <NumStyle.Title>Projects</NumStyle.Title>
                </NumStyle.NumBox>
                <NumStyle.NumBox>
                   <NumStyle.Num>230</NumStyle.Num> 
                   <NumStyle.Title>Customers</NumStyle.Title>
                </NumStyle.NumBox>
                <NumStyle.NumBox>
                   <NumStyle.Num>3</NumStyle.Num> 
                   <NumStyle.Title>Offices</NumStyle.Title>
                </NumStyle.NumBox>
            </NumStyle.Wrapper>
        </NumStyle.Container>
    </NumStyle>
  )
}

export default NumberSec;

