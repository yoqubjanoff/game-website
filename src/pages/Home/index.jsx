import React from "react";
import Hero from "../../components/HomeComponents/Herosection";
import Target from "../../components/HomeComponents/Targetsection";
import NumberSec from "../../components/HomeComponents/NumberSection/indes";
import TeamSection from "../../components/HomeComponents/TeamSection";
import Programs from "../../components/HomeComponents/Programs";

const Home = () => {
  return (
    <>
      <Hero />
      <Target />
      <NumberSec/>
      <TeamSection/>
      <Programs/>
    </>
  );
};

export default Home;
