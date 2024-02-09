import React from "react";
import Hero from "../../components/HomeComponents/Herosection";
import Target from "../../components/HomeComponents/Targetsection";
import NumberSec from "../../components/HomeComponents/NumberSection/indes";
import TeamSection from "../../components/HomeComponents/TeamSection";
import Programs from "../../components/HomeComponents/Programs";
import MakesSec from "../../components/HomeComponents/MakesSection";
import OurPartner from "../../components/HomeComponents/OurPartners";
import './style.js'
import { Main } from "./style.js";


const Home = () => {

  
  return (
    <Main>
      <Hero />
      <Target />
      <NumberSec/>
      <TeamSection/>
      <Programs/>
      <MakesSec/>
      <OurPartner/>
    </Main>
  );
};

export default Home;
