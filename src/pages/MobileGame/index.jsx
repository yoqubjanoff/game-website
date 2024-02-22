import React, { useEffect, useState } from 'react'
import Box from '../../components/Reuseable/Box'
import box1 from "../../assets/images/blogimg1.jpg";
import box2 from "../../assets/images/blogimg2.jpg";
import boxImg2 from "../../assets/images/blogimg2.jpg";
import boxImg3 from "../../assets/images/blogimg3.jpg";
import boxImg4 from "../../assets/images/blogimg4.jpg";
import box3 from "../../assets/images/blogimg3.jpg";
import './index.css'
import { useTranslation } from "react-i18next";

import MobileGame from '../../components/MobileGame';
import request from '../../services/request';

const MobileGames = () => {
  const { t, i18n } = useTranslation();
  const [games, setGames] = useState([]);
  const PC = "PC"
  const getMobile = async () => {
    try {
      const res = await request.get(
        `/public/games?type=${PC}&lan=${localStorage.getItem("i18nextLng")}`
      );
      setGames(res?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMobile();
  }, [i18n.language]);
  console.log(games);
  return (
    <main className='pswrapper'>
      <MobileGame/>
      <Box imageSrc={box1} title={'Billy'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window '} backgroundImage={box1}/>
      <Box imageSrc={boxImg2} title={'The Denominator'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box2}/>
      <Box imageSrc={boxImg3} title={'AO Oni'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={box3}/>
      <Box imageSrc={boxImg4} title={'Shoot Strike'} desc={'Mine crystals and destroy enemies with Billy using the built-in Scratch programming window'} backgroundImage={boxImg4}/>
    </main>
  )
}

export default MobileGames;