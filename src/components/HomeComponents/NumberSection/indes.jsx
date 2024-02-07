import React, { useEffect, useRef, useState } from "react";
import { NumStyle } from "./style";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const NumberSec = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() =>setCounterOn(true)} onExit={() =>setCounterOn(false)}>
      <NumStyle>
        <NumStyle.Container>
          <NumStyle.Wrapper>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                  {counterOn && <CountUp start={0} end={150} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>Employees</NumStyle.Title>
            </NumStyle.NumBox>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                 {counterOn &&  <CountUp start={0} end={20} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>Projects</NumStyle.Title>
            </NumStyle.NumBox>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                  {counterOn && <CountUp start={0} end={230} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>Customers</NumStyle.Title>
            </NumStyle.NumBox>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                 {counterOn &&  <CountUp start={0} end={23} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>Offices</NumStyle.Title>
            </NumStyle.NumBox>
          </NumStyle.Wrapper>
        </NumStyle.Container>
      </NumStyle>
    </ScrollTrigger>
  );
};

export default NumberSec;
