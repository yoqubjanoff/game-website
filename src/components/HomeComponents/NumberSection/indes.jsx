import React, { useEffect, useRef, useState } from "react";
import { NumStyle } from "./style";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";


const NumberSec = () => {
  const { t } = useTranslation();
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() =>setCounterOn(true)} onExit={() =>setCounterOn(false)}>
      <NumStyle>
        <NumStyle.Container>
          <NumStyle.Wrapper>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                  {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>{t("home.number.Employees")}</NumStyle.Title>
            </NumStyle.NumBox>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                 {counterOn &&  <CountUp start={0} end={50} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>{t("home.number.Projects")}</NumStyle.Title>
            </NumStyle.NumBox>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                  {counterOn && <CountUp start={0} end={28} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>{t("home.number.Customers")}</NumStyle.Title>
            </NumStyle.NumBox>
            <NumStyle.NumBox>
              <ScrollTrigger>
                <NumStyle.Num className="number">
                 {counterOn &&  <CountUp start={0} end={5} duration={2} delay={0} />}
                </NumStyle.Num>
              </ScrollTrigger>
              <NumStyle.Title>{t("home.number.Offices")}</NumStyle.Title>
            </NumStyle.NumBox>
          </NumStyle.Wrapper>
        </NumStyle.Container>
      </NumStyle>
    </ScrollTrigger>
  );
};

export default NumberSec;