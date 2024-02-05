import React from "react";
import { ProgStyle } from "./style";
import progImg1 from "../../../assets/images/programs1.jpg";
import progImg2 from "../../../assets/images/programs2.png";
import progImg3 from "../../../assets/images/programs3.jpg";
import progImg4 from "../../../assets/images/programs4.jpg";
import progImg5 from "../../../assets/images/programs5.jpg";
import progImg6 from "../../../assets/images/programs6.jpg";

const Programs = () => {
  return (
    <ProgStyle>
      <ProgStyle.Container>
        <ProgStyle.Wrapper>
          <ProgStyle.Title>Programs we use to create games</ProgStyle.Title>
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
